import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { selectCurrency } from '../../../store/reducers/currencySlice';
import { setCurrency } from '../../../store/reducers/currencyReducer';

import { formatNumber } from '../../../utils/helperFunctions';

const CurrencyHeader = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);

  return (
    <View style={styles.currencyContainer}>
      <Text style={styles.currencyText}>${formatNumber(currency.money.toFixed(2))}</Text>
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
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default CurrencyHeader;