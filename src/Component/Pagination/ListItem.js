import React from "react";

export default function List({item}){
    console.log("item",item)
    return(
        <div>
            <h2>{item.name}</h2>
        </div>
    );
}