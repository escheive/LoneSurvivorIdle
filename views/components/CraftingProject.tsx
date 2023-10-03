import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { incrementCurrency, selectCurrency } from '../../store/reducers/currencySlice';
import { incrementCraftingProject, selectCrafting } from '../../store/reducers/craftingSlice';

import { formatNumber } from '../../utils/helperFunctions';

const CraftingProject = ({ craftingProjects, craftingProjectKey, projectCost }) => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(selectCurrency);
  const project = craftingProjects[craftingProjectKey];
  const upgradeCost = useMemo(() => projectCost(project.totalCrafted), [project.totalCrafted]);

  const handleCraftProject = () => {

    if (project && currency.money >= upgradeCost) {
      dispatch(incrementCurrency({ currencyType: 'money', value: -100 }))
      dispatch(incrementCraftingProject({ craftingProjectKey: craftingProjectKey, value: 1 }))
    }
  }

  return (
    <View style={styles.generatorContainer}>
      <Text>{project.name} LvL{formatNumber(project.totalCrafted)}</Text>
      <Text>Increases the output of {project.appliesTo} by 10%</Text>
      <Text>Current Bonus: x{formatNumber((1.1 ** project.totalCrafted).toFixed(2))}</Text>
      <Button onPress={handleCraftProject} title={`Buy ${project.name} \$${formatNumber(upgradeCost)}`}/>
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