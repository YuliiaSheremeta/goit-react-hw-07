import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './contactsSlice';
import filtersReduser from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts:contactReducer,
    filters:filtersReduser,
  },
});