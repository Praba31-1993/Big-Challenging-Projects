import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./createSlice"
import FormReducer from "./formSlice"
const store=configureStore({
    reducer :{
        countering : counterReducer,
        formslice : FormReducer,
    }
});

console.log("store", store);
export default store