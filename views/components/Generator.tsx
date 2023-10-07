import React, { useMemo } from 'react';
import { Platform, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { selectGenerators, buyGenerator } from '../../store/reducers/generatorsSlice';
import { selectCurrency, incrementCurrency } from '../../store/reducers/currencySlice';
import { resetGenerators } from '../../store/reducers/generatorsReducer';
import { formatNumber } from '../../utils/helperFunctions';

const Generator = ({ generatorId, generatorCost }) => {
    const dispatch = useAppDispatch();
    const currency = useAppSelector(selectCurrency);
    const generators = useAppSelector(selectGenerators);
    const generator = generators[generatorId];
    const upgradeCost = useMemo(() => generatorCost(generator.purchasedQuantity), [generator.purchasedQuantity]);

    const handleBuyGenerator = () => {
        if (generator && currency.money >= upgradeCost) {
            dispatch(incrementCurrency({ currencyType: 'money', value: -upgradeCost}))
            dispatch(buyGenerator({ generatorId: generator.id, value: 1 }));
        }
    }

  return (
    <LinearGradient style={styles.generatorContainer}
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)']}
    >
      <Text style={styles.nameText}>{generator.name} x{formatNumber(generator.totalQuantity)}</Text>
      <TouchableOpacity
        onPress={handleBuyGenerator}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Buy {generator.name} ${formatNumber(upgradeCost)}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )

}

const styles = StyleSheet.create({
  generatorContainer: {
    width: '100%',
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    padding: 6,
    margin: 1,
    justifyContent: 'center',
    ...Platform.select({
        android: {
            elevation: 4,
        },
        ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
    })
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buyButton: {
    backgroundColor: 'rgba(201, 67, 61, 0.7)',
    padding: 10,
    ...Platform.select({
        android: {
            elevation: 1,
        },
        ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },
    })
  },
  buyButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
})

export default Generator;