import 'react-native-gesture-handler';
import React from 'react';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { resetCurrency } from './store/reducers/currencySlice';
import { resetCrafting } from './store/reducers/craftingSlice';
import { resetMissions } from './store/reducers/missionsSlice';
import { resetGenerators } from './store/reducers/generatorsSlice';
import { resetPlayerData } from './store/reducers/playerDataSlice';
import { resetSalvage } from './store/reducers/salvageSlice';

import Navigation from './navigation';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

// dispatch(resetCurrency());
// dispatch(resetCrafting());
// dispatch(resetGenerators());
// dispatch(resetPlayerData());
// dispatch(resetMissions());
// dispatch(resetSalvage());

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
