import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WastelandHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Crafting')}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Crafting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Missions')}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Missions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Salvage')}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Salvage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
  },
  buyButton: {
    backgroundColor: 'rgba(201, 67, 61, 0.7)',
    padding: 25,
    margin: 1,
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
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
})

export default WastelandHome;