import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { View, Text } from 'react-native';

import { selectCurrency } from '../../../store/reducers/currencySlice';
import { setCurrency } from '../../../store/reducers/currencyReducer';

import { formatNumber } from '../../../utils/helperFunctions';

const CurrencyHeader = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);

  return (
    <View>
      <Text>${formatNumber(currency.money.toFixed(2))}</Text>
      <Text>Prestige Points: {formatNumber(currency.prestigePoints.toFixed(2))}</Text>
    </View>
  )
}

export default CurrencyHeader;