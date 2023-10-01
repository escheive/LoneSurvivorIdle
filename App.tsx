import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { resetCurrency } from './store/reducers/currencySlice';
import { resetCrafting } from './store/reducers/craftingSlice';
import { resetGenerators } from './store/reducers/generatorsSlice';
import { resetPlayerData } from './store/reducers/playerDataSlice';

import Navigation from './navigation';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

//   dispatch(resetCurrency());
//   dispatch(resetCrafting());
//   dispatch(resetGenerators());
//   dispatch(resetPlayerData());

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
