import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './navigation';

import { selectPlayerData } from './store/reducers/playerDataSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const playerData = useAppSelector(selectPlayerData);
  console.log(playerData)

  useEffect(() => {
    // When app starts, grab last saved timestamp
    const savedTimestamp = playerData.lastOnlineTimestamp;

    // Get current timestamp
    const currentTimestamp = Date.now();

    if (savedTimestamp) {
        // Calculate duration of offline time in milliseconds
        const offlineDuration = currentTimestamp - savedTimestamp;

        // Calculate all gains based on the offline duration
//         const offlineResourceGains = calculateResourceGains(offlineDuration)
    }
  }, [])
  return (
    <Navigation />
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
