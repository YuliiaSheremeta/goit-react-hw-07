import { configureStore } from '@reduxjs/toolkit';
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
import contactsReduser from './contactsSlice.js'
import filterReduser from './filtersSlice.js'

const persistedUserContact = persistReducer(
    {
        key: 'user_contact',
        storage,
        
    },
    contactsReduser
);
export const store = configureStore({
    reducer: {
        contacts: persistedUserContact,
        filters: filterReduser
    }, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);