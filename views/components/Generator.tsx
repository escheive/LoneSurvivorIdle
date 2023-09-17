import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Generator = ({generatorKey}) => {

  return (
    <View style={styles.generatorContainer}>
      <Text>Generator</Text>
      <Button onPress={() => console.log('buy generator pressed')} title={`Generator`}/>
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