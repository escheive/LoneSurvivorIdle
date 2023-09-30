import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementCraftingProject, selectCrafting } from '../../store/reducers/craftingSlice';

import { formatNumber } from '../../utils/helperFunctions';

const CraftingProject = ({ craftingProjectKey }) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);
  const craftingProjects = useAppSelector(selectCrafting)
  const project = craftingProjects[craftingProjectKey];

  const handleCraftProject = () => {

    if (project && currency.money >= 100) {
      dispatch(incrementCurrency({ currencyType: 'money', value: -100 }))
      dispatch(incrementCraftingProject({ craftingProjectKey: craftingProjectKey, value: 1 }))

      // setUpgradeCost((prevUpgradeCost) => generatorCost(generator.purchasedQuantity))
    }
  }

  useEffect(() => {
    // setUpgradeCost((prevUpgradeCost) => generatorCost(generators[generatorKey].purchasedQuantity))
  }, [project])

  return (
    <View style={styles.generatorContainer}>
      <Text>{project.name} LvL{formatNumber(project.totalCrafted)}</Text>
      <Text>Increases the output of {project.appliesTo} by 10%</Text>
      <Text>Current Bonus: x{formatNumber((1.1 ** project.totalCrafted).toFixed(2))}</Text>
      <Button onPress={handleCraftProject} title={`Buy ${project.name} \$100`}/>
    </View>

  )

}

const styles = StyleSheet.create({
  generatorContainer: {
    width: '100%',
    marginTop: 16,
    justifyContent: 'center'
  }
})

export default CraftingProject;