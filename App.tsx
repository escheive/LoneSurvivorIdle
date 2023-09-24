import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import GeneratorsScreen from './views/screens/GeneratorsScreen';

const BottomTab = createBottomTabNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Generators"
                component={GeneratorsScreen}
            />
        </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
