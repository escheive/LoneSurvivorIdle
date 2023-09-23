import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import generatorsReducer from './reducers/generatorsReducer';
import currencyReducer from './reducers/currencyReducer';

const rootReducer = combineReducers({
    generatorsReducer,
    currencyReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {currency: CurrencyState, generators: GeneratorsState ...}
export type AppDispatch = typeof store.dispatch