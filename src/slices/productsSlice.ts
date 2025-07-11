import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";
import {backendApi} from "../api.ts";


// interface Product {
//     // Define the product properties according to your data structure
//     id: number;
//     name: string;
//     price: number;
//     // Add other product fields as needed
// }

interface ProductState {
    list: ProductData[];
    error: string | null;
}

const initialState: ProductState = {
    list: [],
    error: null,
};

export const getAllProduct = createAsyncThunk(
    "products/getAllProducts",
    async () => {
        // const response = await fetch("./product-data.json");
        // if (!response.ok) {
        //     throw new Error("Failed to fetch products");
        // }
        // const jsonData = await response.json();
        // return jsonData;

      const  response =  await  backendApi.get("/products/all")
        return await response.data
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, () => {
              alert("Products are still loading...")
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.error = action.error.message ?? "Unknown error";
                alert("Error loading: " + state.error);
            });
    },
});

export default productSlice.reducer;
