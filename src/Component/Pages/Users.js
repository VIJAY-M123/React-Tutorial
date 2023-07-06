import React from "react"
import { useSelector } from "react-redux";

export default function Users(){
    const use=useSelector((state)=>{
        return state.use
    });
    console.log("d",use);
    return(
        <div>
            <h2>Users</h2>
        </div>
    );
}