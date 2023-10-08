import React, { useState, useEffect, useRef, useMemo, useContext, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useAppDispatch, useAppSelector, useGameLoop } from '../../../utils/hooks';
import Animated, { useSharedValue, Easing, withTiming } from 'react-native-reanimated';

import TickProgressBar from './TickProgressBar';
import OfflineGainsPopup from '../OfflineGainsPopup';

import { selectGenerators, incrementGenerator } from '../../../store/reducers/generatorsSlice';
import { selectCrafting } from '../../../store/reducers/craftingSlice';
import { incrementMission, selectMissions, selectStartedMissions } from '../../../store/reducers/missionsSlice';
import { selectCurrency, incrementCurrency } from '../../../store/reducers/currencySlice';
import { selectPlayerData, setLastOnlineTimestamp } from '../../../store/reducers/playerDataSlice';
import { selectSalvage } from '../../../store/reducers/salvageSlice';

import { handleGeneratorIncrements, calculateOfflineGains } from '../../../utils/gameLogic';


const Timer = () => {
  const dispatch = useAppDispatch();
  const [tickSpeed, setTickSpeed] = useState(1000);
  const income = 1;
  const [progress, setProgress] = useState(0);
  const animationRef = useRef(0);
  const generators = useAppSelector(selectGenerators);
  const updatedGeneratorsRef = useRef();
  const craftingProjects = useAppSelector(selectCrafting);
  const updatedCraftingProjectsRef = useRef();
  const missions = useAppSelector(selectMissions);
  const startedMissions = useAppSelector(selectStartedMissions);
  const currentStartedMissionsRef = useRef(startedMissions);
  const currency = useAppSelector(selectCurrency);
  const playerData = useAppSelector(selectPlayerData);
  const salvageUpgrades = useAppSelector(selectSalvage);
  const [showPopup, setShowPopup] = useState(true);
  const [offlineGains, setOfflineGains] = useState([]);
  const [completedMissionsWhileOffline, setCompletedMissionsWhileOffline] = useState(0);

  const lerp = (v1, v2, p) => {
    return v1 * (1 - p) + v2 * p;
  };

  const handleMissionsProgress = (currentTime) => {

    for (const missionName in currentStartedMissionsRef.current) {
        if (currentStartedMissionsRef.current[missionName].startTime + currentStartedMissionsRef.current[missionName].duration < currentTime) {
            dispatch(incrementMission({ missionKey: missionName }))
            setCompletedMissionsWhileOffline((completedMissions) => completedMissions + 1);
        }
    }
  }

  const gameLoop = useGameLoop({
      step: 1000,
      maxUpdates: 300,
      onUpdate: (currentTime) => {
        handleGeneratorIncrements(updatedGeneratorsRef, updatedCraftingProjectsRef, salvageUpgrades, dispatch)
        dispatch(setLastOnlineTimestamp({ currentTime: currentTime }));
        handleMissionsProgress(currentTime);
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
    currentStartedMissionsRef.current = startedMissions;
  }, [startedMissions])

  useEffect(() => {
    updatedGeneratorsRef.current = generators;
    updatedCraftingProjectsRef.current = craftingProjects;
  }, [generators, craftingProjects]);

    useEffect(() => {
        // When app starts, start timer TODO: Later there will be no start stop buttons
        gameLoop.start();
        // When app starts, grab last saved timestamp
        const savedTimestamp = playerData.lastOnlineTimestamp;
        // Get current timestamp
        const currentTimestamp = Date.now() / 1000;

        if (savedTimestamp && savedTimestamp !== null) {
            // Calculate duration of offline time in milliseconds
            const offlineDuration = currentTimestamp - savedTimestamp;
            // Calculate how many ticks are equal to offline duration
            const offlineTicks = Math.min(offlineDuration / tickSpeed);

            // Calculate all gains based on the offline duration
            const totalOfflineGains = calculateOfflineGains(updatedGeneratorsRef, updatedCraftingProjectsRef, dispatch, offlineTicks);
            setOfflineGains(totalOfflineGains)
        } else {
            dispatch(setLastOnlineTimestamp({ currentTime: Date.now()/1000}));
        }
    }, []);

    return (
        <View style={styles.timerContainer}>
            <TickProgressBar
              progress={progress}
              totalIncome={1}
              tickSpeed={tickSpeed}
            />
            <OfflineGainsPopup
                offlineGains={offlineGains}
                completedMissions={completedMissionsWhileOffline}
                isVisible={showPopup}
                onClose={() => setShowPopup(false)}
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
    },
    timerButtonsContainer: {
        flexDirection: 'row',
    },
});

// <View style={styles.timerButtonsContainer}>
//     <Button onPress={gameLoop.start} title='start' />
//     <Button onPress={gameLoop.stop} title='stop' />
// </View>