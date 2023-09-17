import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';

const BottomTab = createBottomTabNavigator();

function App(): JSX.Element {
  const [generators, setGenerators] = useState({
    'generatorOne': {
      'totalCount': 0,
      'purchased': 0
    },
    'generatorTwo': {
      'totalCount': 0,
      'purchased': 0
    },
    'generatorThree': {
      'totalCount': 0,
      'purchased': 0
    },
  })
  const [crystals, setCrystals] = useState({
    'blueCrystal': {
      'totalCount': 0,
      'purchased': 0
    },
    'greenCrystal': {
      'totalCount': 0,
      'purchased': 0
    },
    'yellowCrystal': {
      'totalCount': 0,
      'purchased': 0
    },
  })
  const [currency, setCurrency] = useState({
    money: 3,
    shards: 0,
    prestigePoints: 0,
  });
  const [income, setIncome] = useState(100);
  const [tickSpeed, setTickSpeed] = useState(1000);

  return (
    <NavigationContainer>
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <App />
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});
