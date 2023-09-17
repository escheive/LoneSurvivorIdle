import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Home from './views/Home';

function App(): JSX.Element {

  return (
    <View style={styles.container}>
        <Home />
    </View>
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
    }
})
