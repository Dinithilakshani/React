import {combineReducers} from "redux";
import productReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootreducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})
 export  type  RootReducerState = ReturnType<typeof rootreducer>