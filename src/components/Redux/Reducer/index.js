import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import authReducer from './auth';
import userReducer from './user';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
});

export default reducers;
