import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import ScreenWithBackButton from '../components/ScreenWithBackButton';

const SalvageScreen = () => {

  return (
    <ScreenWithBackButton>
      <ScrollView>
        <View>
          <Text>Salvage Screen</Text>
        </View>
      </ScrollView>
    </ScreenWithBackButton>
  )
}

export default SalvageScreen;