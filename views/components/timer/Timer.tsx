import React, { useState, useEffect, useRef, useMemo, useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useAppDispatch, useAppSelector, useGameLoop } from '../../../utils/hooks';
import Animated, { useSharedValue, Easing, withTiming } from 'react-native-reanimated';

import TickProgressBar from './TickProgressBar';

import { selectGenerators, incrementGenerator, resetGenerators } from '../../../store/reducers/generatorsSlice';
import { selectCrafting, resetCrafting } from '../../../store/reducers/craftingSlice';
import { selectCurrency, incrementCurrency, resetCurrency } from '../../../store/reducers/currencySlice';
import { selectPlayerData, setLastOnlineTimestamp } from '../../../store/reducers/playerDataSlice';

import { handleGeneratorIncrements } from '../../../utils/gameLogic';


const Timer = () => {
  const dispatch = useAppDispatch();
  const [tickSpeed, setTickSpeed] = useState(1000);
  const income = 1;
  const [progress, setProgress] = useState(0);
  const animationRef = useRef(0);
  const generators = useAppSelector(selectGenerators);
  const generatorKeys = Object.keys(generators);
  const updatedGeneratorsRef = useRef();
  const craftingProjects = useAppSelector(selectCrafting);
  const craftingProjectKeys = Object.keys(craftingProjects);
  const updatedCraftingProjectsRef = useRef();
  const money = useAppSelector(selectCurrency);
  const playerData = useAppSelector(selectPlayerData);

  const lerp = (v1, v2, p) => {
    return v1 * (1 - p) + v2 * p;
  };

  const gameLoop = useGameLoop({
      step: 1000,
      maxUpdates: 300,
      onUpdate: (step, time, timing) => {
        handleGeneratorIncrements(generatorKeys, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch, 1)
//           dispatch(resetCurrency());
//           dispatch(resetCrafting())
//           dispatch(resetGenerators())
      },
      onRender: (interpolation) => {
        const interpolatedProgress = lerp(0, 1, interpolation)
        setProgress(interpolatedProgress);
      },
      onPanic: () => {

      },
    });

  useEffect(() => {
    updatedGeneratorsRef.current = generators;
    updatedCraftingProjectsRef.current = craftingProjects;
  }, [generators, craftingProjects]);

    useEffect(() => {
        // When app starts, grab last saved timestamp
        const savedTimestamp = playerData.lastOnlineTimestamp;
        // Get current timestamp
        const currentTimestamp = Date.now();

        if (savedTimestamp && savedTimestamp !== null) {
            // Calculate duration of offline time in milliseconds
            const offlineDuration = currentTimestamp - savedTimestamp;
            // Calculate how many ticks are equal to offline duration
            const offlineTicks = Math.min(offlineDuration / tickSpeed);

            // Calculate all gains based on the offline duration
            handleGeneratorIncrements(generatorKeys, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch, offlineTicks)
        } else {
             dispatch(setLastOnlineTimestamp())
        }
    }, [])

    return (
        <View style={styles.timerContainer}>
            <TickProgressBar
              progress={progress}
              totalIncome={1}
              tickSpeed={tickSpeed}
            />
            <View style={styles.timerButtonsContainer}>
                <Button onPress={gameLoop.start} title='start' />
                <Button onPress={gameLoop.stop} title='stop' />
            </View>
        </View>
    )
}

export default Timer;

const styles = StyleSheet.create({
    timerContainer: {
        width: '100%',
        marginTop: 16,
        alignItems: 'center',
    },
    timerButtonsContainer: {
        flexDirection: 'row',
    },
});