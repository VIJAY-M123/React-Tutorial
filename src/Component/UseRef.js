import React, { useEffect, useRef, useState } from "react";

export default function Ref(){

    const[inputValue, setinputValue]=useState("");
    console.log("inpu".inputValue.current)

    const previousInputvalue=useRef();
    console.log("d",previousInputvalue.current);

    useEffect(()=>{
        previousInputvalue.current=inputValue;
    },[inputValue]);

    return(
        <div>
            <h2>UseRef</h2>

            <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}
             placeholder="Enter the value" />
            
            <h2>InputValue:{inputValue}</h2>
            <h3>PreviousValu:{previousInputvalue.current}</h3>
        </div>
    );
}