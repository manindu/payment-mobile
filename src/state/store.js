import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import combinedReducers from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['payment'],
};
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// We can add push new middlewares as needed
const middlewares = [];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store, null, () => {});

export {store, persistor};
