import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementCraftingProject, selectCrafting } from '../../store/reducers/craftingSlice';

import { formatNumber } from '../../utils/helperFunctions';

const CraftingProject = ({key, craftingProjectKey}) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);
  const craftingProjects = useAppSelector(selectCrafting)
  const project = craftingProjects[craftingProjectKey];

  const handleCraftProject = () => {

    if (project && currency.money >= 1000) {
      dispatch(incrementCurrency({ currencyType: 'money', value: -1000 }))
      dispatch(incrementCraftingProject({ craftingProjectKey: craftingProjectKey, value: 1 }))

      // setUpgradeCost((prevUpgradeCost) => generatorCost(generator.purchasedQuantity))
    }
  }

  useEffect(() => {
    // setUpgradeCost((prevUpgradeCost) => generatorCost(generators[generatorKey].purchasedQuantity))
  }, [project])

  return (
    <View style={styles.generatorContainer}>
      <Text>{project.name} LvL{formatNumber(project.crafted)}</Text>
      <Text>Increases the output of {project.affects} by 10%</Text>
      <Text>Current Bonus: x{formatNumber((1.1 ** project.crafted).toFixed(2))}</Text>
      <Button onPress={handleCraftProject} title={`Buy ${project.name} \$1000 }`}/>
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