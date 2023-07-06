import React from "react";

export default function Page({total,handle}){
    
    const page= [...Array(total).keys()].map(num=>num+1)
    console.log("page",page)
    return(
        <div>
           {
            page.map(num=>(
                <button onClick={()=>handle(num)}>{num}</button>
            ))
           }
        </div>
    );
}