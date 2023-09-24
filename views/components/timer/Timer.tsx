import React, { useState, useEffect, useRef, useMemo, useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector, useGameLoop } from '../../../utils/hooks';
import Animated, { useSharedValue, Easing, withTiming } from 'react-native-reanimated';

import TickProgressBar from './TickProgressBar';

import { selectGenerators, incrementGenerator, resetGenerators } from '../../../store/reducers/generatorsSlice';
import { selectCurrency, incrementCurrency } from '../../../store/reducers/currencySlice';
import { setCurrency } from '../../../store/reducers/currencyReducer';



const Timer = () => {
  const dispatch = useAppDispatch();
  const [tickSpeed, setTickSpeed] = useState(1000);
  const income = 1;
  const [progress, setProgress] = useState(0);
  const animationRef = useRef(0);
  const generators = useAppSelector(selectGenerators);
  const updatedGeneratorsRef = useRef();
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
//           dispatch(resetGenerators())
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
    for (let i=0; i < generatorKeys.length; i++) {
      const currentGeneratorKey = generatorKeys[i]
      const previousGeneratorKey = generatorKeys[i - 1];
      const currentGenerator = updatedGeneratorsRef.current[currentGeneratorKey];
      const previousGenerator = updatedGeneratorsRef.current[previousGeneratorKey]

      if (generators[currentGeneratorKey].totalQuantity > 0) {
        if (currentGeneratorKey === 'generatorOne') {
          dispatch(incrementCurrency({ currencyType: 'money', value: currentGenerator.totalQuantity }))
        } else {
//           dispatch(incrementGenerators(updatedGenerators, generatorKeys))
          dispatch(incrementGenerator({ generatorKey: previousGeneratorKey, value: currentGenerator.totalQuantity }))
        }
      }
    };
  };

  useEffect(() => {
    updatedGeneratorsRef.current = generators;
  }, [generators]);

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