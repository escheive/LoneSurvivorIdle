import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import { selectSalvage, incrementSalvageUpgrade } from '../../store/reducers/salvageSlice';

import SalvageUpgradeComponent from '../components/SalvageUpgradeComponent';
import ScreenWithBackButton from '../components/ScreenWithBackButton';

import { calculateSalvagedTechEarned } from '../../utils/gameLogic';

const SalvageScreen = () => {
  const dispatch = useAppDispatch();
  const salvageUpgrades = useAppSelector(selectSalvage);

  return (
    <ScreenWithBackButton>
      <Text></Text>
      <ScrollView>
        {salvageUpgrades.map((upgrade) => (
          <SalvageUpgradeComponent upgrade={upgrade} />
        ))}
      </ScrollView>
    </ScreenWithBackButton>
  )
}

export default SalvageScreen;