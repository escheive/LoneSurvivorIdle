import { useState, useEffect, useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Game loop hook to track time within the game
export const useGameLoop = (options = {}) => {
  const [state, setState] = useState('STOPPED');
  const frameRef = useRef(null);
  const timing = useRef({ last: null, total: 0, delta: 0, lag: 0, current: 0 });
  const numberOfUpdates = useRef(0);

  const {
    tickSpeed = 1000,
    step = 1000,
    maxUpdates = 300,
    onUpdate = () => {},
    onRender = () => {},
    onPanic = () => {},
  } = options;

  const tick = (time) => {
    if (timing.current.last === null) {
      timing.current.last = time;
    }
    timing.current.delta = time - timing.current.last;
    timing.current.total += timing.current.delta;
    timing.current.lag += timing.current.delta;
    timing.current.last = time;
    timing.current.current = performance.now();

    while (timing.current.lag >= options.step) {
      timing.current.lag -= options.step;
      onUpdate(timing.current.current);
      numberOfUpdates.current++;
      if (numberOfUpdates.current >= maxUpdates) {
        onPanic();
        break;
      }
    }

    onRender(timing.current.lag / step);

    frameRef.current = requestAnimationFrame(tick);
  }

  const isStopped = state === 'STOPPED';
  const isPaused = state === 'PAUSED';
  const isRunning = state === 'RUNNING';

  const start = () => {
    if (isStopped) {
      setState('RUNNING');

      timing.current = { last: null, total: 0, delta: 0, lag: 0};
      numberOfUpdates.current = 0;

      frameRef.current = requestAnimationFrame(tick);
    }
  };

  const stop = () => {
    if (isRunning || isPaused) {
      setState('STOPPED');
      cancelAnimationFrame(frameRef.current);
    }
  };

  const pause = () => {
    if (isRunning) {
      setState('PAUSED');
      cancelAnimationFrame(frameRef.current);
    }
  };

  const resume = () => {
    if (isPaused) {
      setState('RUNNING');
      frameRef.current = requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return {
    isStopped,
    isPaused,
    isRunning,
    start,
    stop,
    pause,
    resume,
  };
};