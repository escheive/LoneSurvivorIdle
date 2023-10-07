import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import WastelandHome from '../views/screens/WastelandHome';
import CraftingScreen from '../views/screens/CraftingScreen';
import MissionsScreen from '../views/screens/MissionsScreen';

const Stack = createStackNavigator();

const WastelandNavigator = () => {
  return (
    <View style={styles.navigationContainer}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          backgroundColor: 'rgba(44, 62, 80, 0.9)',
        }}
      >
        <Stack.Screen
          name="Home"
          component={WastelandHome}
        />
        <Stack.Screen
          name="Crafting"
          component={CraftingScreen}
        />
        <Stack.Screen
          name="Missions"
          component={MissionsScreen}
        />
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
  }
})

export default WastelandNavigator;