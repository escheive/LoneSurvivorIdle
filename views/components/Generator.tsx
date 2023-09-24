import React, { useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { selectGenerators, buyGenerator } from '../../store/reducers/generatorsSlice';
import { resetGenerators } from '../../store/reducers/generatorsReducer';
import { formatNumber } from '../../utils/helperFunctions';

const Generator = ({ generatorKey, generatorCost }) => {
    const dispatch = useAppDispatch();
    const generators = useAppSelector(selectGenerators);
    const generator = generators[generatorKey];
    const upgradeCost = useMemo(() => generatorCost(generator.purchasedQuantity), [generator.purchasedQuantity]);

    const handleBuyGenerator = () => {
        dispatch(buyGenerator({ generatorKey: generatorKey, value: 1 }));
    }

  return (
    <View style={styles.generatorContainer}>
      <Text>{generator.name} x{generator.totalQuantity}</Text>
      <Button onPress={handleBuyGenerator} title={`Buy ${generator.name} \$${formatNumber(upgradeCost.toFixed(2))}`} />
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