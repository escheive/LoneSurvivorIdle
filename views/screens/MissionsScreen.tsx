import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import ScreenWithBackButton from '../components/ScreenWithBackButton';

import { selectMissions } from '../../store/reducers/missionsSlice';

const MissionsScreen = () => {
    const missions = useAppSelector(selectMissions);
    const missionsKeys = Object.keys(missions);

    return (
      <ScreenWithBackButton>
        <ScrollView>
            <Text>MissionsScreen</Text>
            {missionsKeys.map((mission) => (
                <View>
                    <Text>{mission.name}</Text>
                </View>
            ))}
            <View>
            </View>
        </ScrollView>
      </ScreenWithBackButton>
    )
}

export default MissionsScreen;