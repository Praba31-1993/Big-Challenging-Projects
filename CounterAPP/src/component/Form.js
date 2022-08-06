import React from "react";
import { submit } from "../redux/formSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Form(){
    const dispatch = useDispatch()
    const name = useSelector((item)=>item.formslice.name)
    const address = useSelector((item)=>item.formslice.address)
    return(
        <div>
              <input type="text" value={name} placeholder="name" />  
              <input type="text" value={address} placeholder="address"/>
              <button onClick={()=>dispatch(submit())}>Submit</button>  
        </div>
    )
}