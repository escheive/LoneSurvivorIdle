import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementCraftingProject, selectCrafting } from '../../store/reducers/craftingSlice';

import { formatNumber } from '../../utils/helperFunctions';

const SalvageUpgradeComponent = ({ upgrade }) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);
//   const upgradeCost = useMemo(() => projectCost(project.totalCrafted), [project.totalCrafted]);

  const handleBuyUpgrade = () => {

    if (upgrade && currency.money >= upgradeCost) {
      dispatch(incrementCurrency({ currencyType: 'prestigePoints', value: -1 }))
//       dispatch(incrementCraftingProject({ craftingProjectId: craftingProjectId, value: 1 }))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{upgrade.name} LvL{formatNumber(upgrade.level)}</Text>
      <Text style={styles.descriptionText}>{upgrade.description}</Text>
      <Text style={styles.currentMultiplierText}>Current Bonus: x{formatNumber((upgrade.modifier ** upgrade.level).toFixed(2))}</Text>
      <TouchableOpacity
        onPress={handleCraftProject}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Upgrade {upgrade.name} ${formatNumber(100)}</Text>
      </TouchableOpacity>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  currentMultiplierText: {
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

export default SalvageUpgradeComponent;