import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Generator = ({generatorKey, generatorCostFormula }) => {
    const generator = useSelector((state) => state.generatorsReducer[generatorKey]);
    const generatorCost = useMemo(() => generatorCostFormula(generator.purchasedQuantity));

  return (
    <View style={styles.generatorContainer}>
      <Text>{generator.name} x{generator.totalQuantity}</Text>
      <Button onPress={() => console.log('buy generator pressed')} title={`Buy ${generator.name} \$${generatorCost}`}/>
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

export default Generator;