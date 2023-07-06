import React from "react";
import Child from "./Child";

export default function parent(Props){
    
    return(
        <div>
            <h1>Parentg</h1>
            <Child name="vijay"></Child>
        </div>
    );
}