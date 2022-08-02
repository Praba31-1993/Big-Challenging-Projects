import React, {useState} from "react";


export default function Counter(){
    const [count, setCount] = useState(0)
    const Increment = ()=>{
        setCount(count+1)
    }
    const Decrement = ()=>{
        setCount(count-1)
    }
    const Reset = ()=>{
        setCount(0)
    }

    return(
        <div>

            <p style={{fontSize: "50px"}}>{count}</p>
            <button onClick={Increment} style={{width:"30px", height:"30px"}}>+</button>
            <button onClick={Decrement} style={{width:"30px", height:"30px"}}>-</button>
            <button onClick={Reset} style={{width:"50px", height:"30px"}}>Reset</button>


        </div>
    )
}