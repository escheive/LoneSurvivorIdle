import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementCraftingProject, selectCrafting } from '../../store/reducers/craftingSlice';

import { formatNumber } from '../../utils/helperFunctions';

const CraftingProject = ({ craftingProjectId, projectCost }) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);
  const craftingProjects = useAppSelector(selectCrafting);
  const project = craftingProjects[craftingProjectId];
  const upgradeCost = useMemo(() => projectCost(project.totalCrafted), [project.totalCrafted]);

  const handleCraftProject = () => {

    if (project && currency.money >= upgradeCost) {
      dispatch(incrementCurrency({ currencyType: 'money', value: -upgradeCost }))
      dispatch(incrementCraftingProject({ craftingProjectId: craftingProjectId, value: 1 }))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{project.name} LvL{formatNumber(project.totalCrafted)}</Text>
      <Text style={styles.descriptionText}>Increases the output of {project.appliesTo} by 10%</Text>
      <Text style={styles.currentMultiplierText}>Current Bonus: x{formatNumber((1.1 ** project.totalCrafted).toFixed(2))}</Text>
      <TouchableOpacity
        onPress={handleCraftProject}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Buy {project.name} ${formatNumber(upgradeCost)}</Text>
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

export default CraftingProject;