import React from "react";
import Nested from "./Nested Child";

export default function Child(Props){
    return(
        <div>
           
            <h2>your name is {Props.name}</h2>
            <Nested skill="React"></Nested>
        </div>
    );
}