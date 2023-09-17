import React, { useState, useEffect, useRef, useMemo, useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Animated, { useSharedValue, Easing, withTiming } from 'react-native-reanimated';

import { setGenerators } from '../../../store/reducers/generatorsReducer';

import TickProgressBar from './TickProgressBar';


const Timer = () => {
    const dispatch = useDispatch();
    const generators = useSelector((state) => state.generatorsReducer);
    const currencies = useSelector((state) => state.currenciesReducer);
    const [tickSpeed, setTickSpeed] = useState(5000);
    const [income, setIncome] = useState(1);

    const [progress, setProgress] = useState(0);
    const animationRef = useRef(0);

    const generatorKeys = Object.keys(generators);

  const handleGeneratorIncrements = () => {
    const updatedGenerators = { ...generators }

    for (let i=0; i < generatorKeys.length; i++) {
      const currentGeneratorKey = generatorKeys[i]
      const previousGeneratorKey = generatorKeys[i - 1];
      const currentGenerator = updatedGenerators[currentGeneratorKey];
      const previousGenerator = updatedGenerators[previousGeneratorKey];

      if (currentGenerator.totalCount > 0) {
        if (currentGeneratorKey === 'generatorOne') {
          dispatch(setCurrency('money', (1 * currentGenerator.totalQuantity)))
        } else if (currentGeneratorKey === 'generatorTwo') {
          previousGenerator.totalCount += currentGenerator.totalCount
        }

      }
    }
    dispatch(setGenerators(updatedGenerators));
  }

  const handleIncrement = () => {

    // handleCrystalIncrements();
    handleGeneratorIncrements();
  };

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

    const handleTickEnd = () => {
        setProgress(0);
        startTickProgressBar();
        handleIncrement();
    }

    useEffect(() => {
        startTickProgressBar();
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
              totalIncome={(income.money * generators.generatorOne.totalCount)}
              tickSpeed={tickSpeed}
            />
        </View>
    )
}

export default Timer;

const styles = StyleSheet.create({
    timerContainer: {
        width: '100%',
        marginTop: 16,
        alignItems: 'center',
        height: 50,
    },
});