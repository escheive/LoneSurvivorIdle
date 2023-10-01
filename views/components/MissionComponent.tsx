import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementMission, selectMissions } from '../../store/reducers/missionsSlice';

import { formatNumber } from '../../utils/helperFunctions';

const MissionComponent = ({ missions, missionKey }) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);
  const mission = missions[missionKey];

  const handleMissionStart = () => {

    if (mission.startTime === null) {
      dispatch(incrementMission({ missionKey: missionKey, value: 1 }))

      // setUpgradeCost((prevUpgradeCost) => generatorCost(generator.purchasedQuantity))
    }
  }

  useEffect(() => {
    // setUpgradeCost((prevUpgradeCost) => generatorCost(generators[generatorKey].purchasedQuantity))
  }, [mission])

  return (
    <View style={styles.generatorContainer}>
      <Text>{mission.name} LvL{formatNumber(mission.level)}</Text>
      <Button onPress={handleMissionStart} title={`Start Mission`}/>
    </View>

  )

}

const styles = StyleSheet.create({
  generatorContainer: {
    width: '100%',
    marginTop: 16,
    justifyContent: 'center'
  }
})

export default MissionComponent;