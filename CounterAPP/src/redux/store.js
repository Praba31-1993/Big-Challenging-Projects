import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./createSlice"
const store=configureStore({
    reducer :{
        countering : counterReducer,
    }
});

console.log("store", store);
export default store