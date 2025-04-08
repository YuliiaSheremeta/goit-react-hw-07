import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://67f427facbef97f40d2d8cb8.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts', async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts');
            return resp.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContacts', async (newContact, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', newContact);
            return resp.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', async (contactId, thunkAPI) => {
        try {
            const resp =await axios.delete(`/contacts/${contactId}`);
            return resp.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);