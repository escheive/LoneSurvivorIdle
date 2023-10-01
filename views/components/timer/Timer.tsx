import React, { useState, useEffect, useRef, useMemo, useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useAppDispatch, useAppSelector, useGameLoop } from '../../../utils/hooks';
import Animated, { useSharedValue, Easing, withTiming } from 'react-native-reanimated';

import TickProgressBar from './TickProgressBar';

import { selectGenerators, incrementGenerator, resetGenerators } from '../../../store/reducers/generatorsSlice';
import { selectCrafting, resetCrafting } from '../../../store/reducers/craftingSlice';
import { selectCurrency, incrementCurrency, resetCurrency } from '../../../store/reducers/currencySlice';

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
//   let startTime: number;

  const lerp = (v1, v2, p) => {
    return v1 * (1 - p) + v2 * p;
  };

  const gameLoop = useGameLoop({
      step: 1000,
      maxUpdates: 300,
      onUpdate: (step, time, timing) => {
        handleGeneratorIncrements(generatorKeys, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch)
//         handleGeneratorIncrements();
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


//   const handleGeneratorIncrements = () => {
//     for (let i=0; i < generatorKeys.length; i++) {
//       const currentGeneratorKey = generatorKeys[i]
//       const previousGeneratorKey = generatorKeys[i - 1];
//       const currentGenerator = updatedGeneratorsRef.current[currentGeneratorKey];
//       const previousGenerator = updatedGeneratorsRef.current[previousGeneratorKey];
//       const applicableCraftingProjectKey = craftingProjectKeys[i];
//       const applicableCraftingProject = updatedCraftingProjectsRef.current[applicableCraftingProjectKey];
//
//       const totalGeneratorProduction = currentGenerator.totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);
//
//       if (updatedGeneratorsRef.current[currentGeneratorKey].totalQuantity > 0) {
//         if (currentGeneratorKey === 'generatorOne') {
//           dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
//         } else {
// //           dispatch(incrementGenerators(updatedGenerators, generatorKeys))
//           dispatch(incrementGenerator({ generatorKey: previousGeneratorKey, value: totalGeneratorProduction }))
//         }
//       }
//     };
//   };

  useEffect(() => {
    updatedGeneratorsRef.current = generators;
    updatedCraftingProjectsRef.current = craftingProjects;
  }, [generators, craftingProjects]);

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