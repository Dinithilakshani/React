import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {backendApi} from "../api.ts";
import type {ContactData} from "../model/contact.ts";

interface ContactState {
    list: ContactData[],
    error: string | null | undefined
}

const initialState: ContactState = {
    list: [],
    error: null
}

export const getAllContacts = createAsyncThunk(
    'contacts/getAllContacts',
    async () => {
        const response = await backendApi.get("/contacts/all");
        return response.data
    }
)

export const saveContact = createAsyncThunk(
    'contacts/saveContact',
    async (contact: ContactData) => {
        const response = await backendApi.post("/contacts/save", contact);
        return response.data
    }
)

const contactsSlice = createSlice({

    name: 'contacts',
    initialState: initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder
                .addCase(getAllContacts.pending, () => {
                    alert("Contacts are still loading...");
                }).addCase(getAllContacts.fulfilled, (state, action) => {
                state.list = action.payload;
            }).addCase(getAllContacts.rejected, (state, action) => {
                state.error = action.error.message;
                alert("Error loading:" + state.error);
            })
                .addCase(saveContact.pending, () => {
                    alert("Contact is being saved...");
                }).addCase(saveContact.fulfilled, (state, action) => {
                state.list.push(action.payload);
            }).addCase(saveContact.rejected, (state, action) => {
                state.error = action.error.message;
                alert("Error saving:" + state.error);
            })
        }
});

export default contactsSlice.reducer