import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { View, Text, StyleSheet } from 'react-native';

import { selectCurrency } from '../../../store/reducers/currencySlice';
import { setCurrency } from '../../../store/reducers/currencyReducer';

import { formatNumber } from '../../../utils/helperFunctions';

const CurrencyHeader = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);

  return (
    <View style={styles.currencyContainer}>
      <Text style={styles.currencyText}>${formatNumber(currency.scraps)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    currencyContainer: {
        width: '25%',
        alignItems: 'center',
    },
    currencyText: {
        width: '100%',
        textAlign: 'center',
        marginVertical: 1,
        color: 'rgba(201, 67, 61, 1)',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default CurrencyHeader;