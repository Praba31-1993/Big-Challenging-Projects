import { createSlice } from "@reduxjs/toolkit";
const initialState=({
    name : {},
    address : {}
})
const FormSlicce = createSlice({
    name : 'Form',
    initialState,
    reducer:{
        submit(state,action){
           
           
        }
    }
})

export const {submit} = FormSlicce.actions
export default FormSlicce.reducer