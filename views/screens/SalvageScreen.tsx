import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import { selectSalvage, incrementSalvageUpgrade } from '../../store/reducers/salvageSlice';
import { selectCurrency } from '../../store/reducers/currencySlice';

import SalvageUpgradeComponent from '../components/SalvageUpgradeComponent';
import ScreenWithBackButton from '../components/ScreenWithBackButton';

import { calculateSalvagedTechEarned } from '../../utils/gameLogic';
import { formatNumber } from '../../utils/helperFunctions';

const SalvageScreen = () => {
  const dispatch = useAppDispatch();
  const salvageUpgrades = useAppSelector(selectSalvage);
  const currency = useAppSelector(selectCurrency);

  return (
    <ScreenWithBackButton>
      <Text>{currency.prestigePoints}</Text>
      <Text>{formatNumber(calculateSalvagedTechEarned(currency.money))}</Text>
      <ScrollView>
        {salvageUpgrades.map((upgrade) => (
          <SalvageUpgradeComponent upgrade={upgrade} />
        ))}
      </ScrollView>
    </ScreenWithBackButton>
  )
}

export default SalvageScreen;