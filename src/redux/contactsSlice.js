import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps';

export const selectContact = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectContact, selectContactFilter],
    (contacts, contactFilter) => {
        return contacts.filter((contact) => contact.text.toLowerCase().includes(contactFilter.toLowerCase())
        );
    }
);

export const selectContactCount = createSelector(
    [selectContact], (contacts) => {
        return contacts.length;
    }
   
);

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
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
        }).addCase(deleteContact.fulfilled, (state) => {
            state.loading = false;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        });
    },
    
}
);
export default slice.reducer;

