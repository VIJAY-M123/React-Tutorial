import React from "react";
import { useDispatch, useSelector } from "react-redux";




export default function Action(){

const dispatch = useDispatch();

const count = useSelector((state)=>state.Countreducer.count)
const dept = useSelector((state)=>state.Deptreducers.position)

console.log("dept",dept);

const Add = () =>{
    dispatch({
        type: "Add",
    })
}

const Dec = () =>{
    dispatch({
        type:"Dec",
    })
}

const Dept = () =>{
    dispatch({
        type:"Inbo"
    })
}

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={Add}>Add</button>
            <button onClick={Dec}>Add</button>
            <h3>{dept}</h3>
            <button onClick={Dept}>Inbo</button>
        </div>
    )
}