import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import { setCurrency } from '../../../store/reducers/currencyReducer';

import { formatNumber } from '../../../utils/helperFunctions';

const CurrencyHeader = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.currencyReducer.money);
  const prestigePoints = useSelector((state) => state.currencyReducer.prestigePoints);

  return (
    <View>
      <Text>${formatNumber(money)}</Text>
      <Text>Prestige Points: {formatNumber(prestigePoints)}</Text>
    </View>
  )
}

export default CurrencyHeader;