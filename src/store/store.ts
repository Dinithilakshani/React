import {configureStore} from "@reduxjs/toolkit";
import {rootreducer} from "../slices/rootReducer.ts";
export const store = configureStore({
    reducer:rootreducer


});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;