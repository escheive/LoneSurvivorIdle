import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenWithBackButton = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {children}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
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

export default ScreenWithBackButton;