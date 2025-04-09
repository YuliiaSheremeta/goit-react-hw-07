import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from '../redux/contactsOps';
import { selectNameFilter } from './filtersSlice';

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectIsFormVisible = (state) => state.contacts.isFormVisible;

export const selectIsSearchVisible = (state) => state.contacts.isSearchVisible;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
        isFormVisible: false,
        isSearchVisible: false,
    }, reducers: {
        toggleFormVisibility(state) {
      state.isFormVisible = !state.isFormVisible;
    },
        toggleSearchVisibility(state) {
      state.isSearchVisible = !state.isSearchVisible;
    },
    },
        
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContact.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        }).addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(deleteContact.fulfilled, (state,action) => {
            state.loading = false;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        });
    },
    
}
);
export const { toggleFormVisibility, toggleSearchVisibility } = slice.actions;
export default slice.reducer;

