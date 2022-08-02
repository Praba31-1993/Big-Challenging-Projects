import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset } from "../redux/createSlice";

export default function Counter(){
    // const [count, setCount] = useState(0)

    const countData = useSelector((item)=> item.countering.count)
    const dispatch = useDispatch()
    console.log("All Datas", countData)
   
    return(
        <div>

            <p style={{fontSize: "50px"}}>{countData}</p>
            <button onClick={()=>dispatch(increment())} style={{width:"30px", height:"30px"}}>+</button>
            <button onClick={()=>dispatch(decrement())} style={{width:"30px", height:"30px"}}>-</button>
            <button onClick={()=>dispatch(reset())} style={{width:"50px", height:"30px"}}>Reset</button>


        </div>
    )
}