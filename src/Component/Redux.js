import React from "react";
import { useSelector,useDispatch } from "react-redux";

export default function Redux(){

    const count=useSelector((state)=>state.count)
    const dispatch =useDispatch();

    const increment=()=>{
       dispatch({type:"incre"})
    }

    const decrement=()=>{
        dispatch({type:"decre"})
    }
    return(
        <div>
            <h2>Redux</h2>

            <h2>Counter App</h2>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    );
}