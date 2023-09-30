import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import ScreenWithBackButton from '../components/ScreenWithBackButton';

const MissionsScreen = () => {
    return (
      <ScreenWithBackButton>
        <ScrollView>
            <Text>MissionsScreen</Text>
            <View>
            </View>
        </ScrollView>
      </ScreenWithBackButton>
    )
}

export default MissionsScreen;