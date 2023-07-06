import React, { useEffect, useState } from "react";

export default function Fetch(url){
    const[Data,SetData]=useState(null);

    useEffect(()=>{
        fetch(url).
        then((res)=>res.json()).
        then(data=>SetData(data))
    })


    return [Data]
}