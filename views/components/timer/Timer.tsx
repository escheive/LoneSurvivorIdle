import React, { useState, useEffect, useRef, useMemo, useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector, useGameLoop } from '../../../utils/hooks';
import Animated, { useSharedValue, Easing, withTiming } from 'react-native-reanimated';

import TickProgressBar from './TickProgressBar';

import { selectGenerators } from '../../../store/reducers/generatorsSlice';
import { selectCurrency, incrementCurrency } from '../../../store/reducers/currencySlice';
import { setCurrency } from '../../../store/reducers/currencyReducer';
import { setGenerators, incrementGenerator, incrementGenerators } from '../../../store/reducers/generatorsReducer';



const Timer = () => {
  const dispatch = useAppDispatch();
  const [tickSpeed, setTickSpeed] = useState(1000);
  const income = 1;
  const [progress, setProgress] = useState(0);
  const animationRef = useRef(0);
  const generators = useAppSelector(selectGenerators);
  const money = useAppSelector(selectCurrency);
  const generatorKeys = Object.keys(generators);
  let startTime: number;

  const gameLoop = useGameLoop({
      step: 1000 / 30,
      maxUpdates: 300,
      onUpdate: (step, time, totalTime) => {
        if (!startTime) {
          startTime = time;
        }
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / tickSpeed, 1)
        setProgress(progress);
        if ( elapsedTime >= tickSpeed ) {
          startTime = time;
          setProgress(1)
          handleGeneratorIncrements();
        } else {
          const progress = elapsedTime / 1000;
          setProgress(progress);
        }
      },
      onRender: (interpolation) => {

      },
      onPanic: () => {

      },
    });


  const handleGeneratorIncrements = () => {
    const updatedGenerators = { ...generators };

    for (let i=0; i < generatorKeys.length; i++) {
      const currentGeneratorKey = generatorKeys[i]
      const previousGeneratorKey = generatorKeys[i - 1];
      const currentGenerator = updatedGenerators[currentGeneratorKey];
      const previousGenerator = updatedGenerators[previousGeneratorKey];

      if (currentGenerator.totalQuantity > 0) {
        if (currentGeneratorKey === 'generatorOne') {
          dispatch(incrementCurrency({ currencyType: 'money', value: currentGenerator.totalQuantity }))
        }
//         } else {
//             dispatch(incrementGenerators(generators, generatorKeys))
// //           dispatch(incrementGenerator(previousGeneratorKey, currentGenerator.totalQuantity + currentGenerator.totalQuantity))
//         }

      }
    }
  }

    const startTickProgressBar = useCallback(() => {
        let startTime: number;
        const animate = (time) => {
          if (!startTime) {
            startTime = time;
          }
          const elapsedTime = time - startTime;
          const progress = Math.min(elapsedTime / tickSpeed, 1)
          setProgress(progress);
          if ( progress === 1 ) {
            handleTickEnd();
            startTime = 0;
          } else {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        animationRef.current = requestAnimationFrame(animate);
    }, [tickSpeed]);

//     const handleTickEnd = () => {
//         setProgress(0);
//         startTickProgressBar();
//         handleGeneratorIncrements();
//     }

    useEffect(() => {
//         startTickProgressBar();
        return () => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        }
    }, []);

    return (
        <View style={styles.timerContainer}>
            <TickProgressBar
              progress={progress}
              totalIncome={1}
              tickSpeed={tickSpeed}
            />
            <Button onPress={gameLoop.start} title='start' />
            <Button onPress={gameLoop.stop} title='stop' />
            <Button onPress={gameLoop.resume} title='resume' />
            <Button onPress={gameLoop.pause} title='pause' />
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
});