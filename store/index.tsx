import { createStore, combineReducers } from 'redux';
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

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);