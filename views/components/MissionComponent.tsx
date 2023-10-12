import React, { useState, useRef, useEffect, useContext } from 'react';
import { Platform, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { selectPlayerData } from '../../store/reducers/playerDataSlice';
import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementMission, startMission, selectMissions } from '../../store/reducers/missionsSlice';

import { formatNumber, formatTime } from '../../utils/helperFunctions';

const MissionComponent = ({ missions, missionKey }) => {
  const dispatch = useAppDispatch();
  const playerData = useAppSelector(selectPlayerData);
  const currency = useAppSelector(selectCurrency);
  const mission = missions[missionKey];
  const currentTimestampRef = useRef(playerData.lastOnlineTimestamp);

  const handleMissionStart = () => {
      dispatch(startMission({ missionKey: missionKey }))
  }

  const currentTime = playerData.lastOnlineTimestamp;
  const remainingTime = mission.startTime
    ? Math.max(mission.startTime + mission.duration - currentTime, 0)
    : 0;
  const formattedRemainingTime = formatTime(remainingTime);

  return (
    <View style={styles.container}>
      <Text style={styles.missionName}>{mission.name} LvL{formatNumber(mission.level)}</Text>
      {mission.startTime !== null ? (
      <>
        <Text style={styles.remainingMissionTime}>{formattedRemainingTime}</Text>
      </>
      ) : null}
      <TouchableOpacity
        onPress={handleMissionStart}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Start Mission</Text>
      </TouchableOpacity>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    justifyContent: 'center'
  },
  missionName: {
    fontSize: 16,
    color: 'white',
  },
  remainingMissionTime: {
    fontSize: 16,
    color: 'white',
  },
  buyButton: {
    backgroundColor: 'rgba(201, 67, 61, 0.7)',
    padding: 10,
    ...Platform.select({
        android: {
            elevation: 1,
        },
        ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
    })
  },
  buyButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
})

export default MissionComponent;