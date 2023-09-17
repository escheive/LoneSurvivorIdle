import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { formatNumber } from '../../../utils/helperFunctions';

const CurrencyHeader = () => {
  const currencies = useSelector((state) => state.currencyReducer);

  return (
    <View>
      <Text>${formatNumber((currencies.money).toFixed(2))}</Text>
      <Text>Presige Points: {formatNumber((currencies.prestigePoints).toFixed(2))}</Text>
    </View>
  )
}

export default CurrencyHeader;