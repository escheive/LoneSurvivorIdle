import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Generator = ({generatorKey}) => {
    const generator = useSelector((state) => state.generatorsReducer[generatorKey]);

  return (
    <View style={styles.generatorContainer}>
      <Text>{generator.name} x{generator.totalQuantity}</Text>
      <Button onPress={() => console.log('buy generator pressed')} title={`Buy ${generator.name}`}/>
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