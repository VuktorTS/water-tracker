import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { waterReducer } from './water/waterSlice';

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn', 'user'],
};

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  water: waterReducer,
});

const rootReducer = (state, action) => {
    if(action.type === 'auth/logout/fulfilled'){
    storage.removeItem("persistor:auth");
      return combinedReducer(undefined, action)
    }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
