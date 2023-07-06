import React, { useEffect, useState } from "react";

export default function Load(){
  const Initail={
    age:"21",
    name:"vijay",
    address:"aaaa",
  }
  const Initail1={
    age:"21",
    name:"vijay",
    address:"aaaa",
  }

    const[getLoadData,setLoaddata]=useState("")

    const[getInitial,setInitial]=useState([Initail]);
    
    const[getInitial1,setInitial1]=useState(Initail1);

    console.log("d",getInitial)

    const LoadData=()=>{
        setLoaddata("Hello Load")
    
    }

    useEffect(()=>{
            LoadData();
    },[]);
    return(
        <div>
           <button onClick={()=>setLoaddata("Hi")}>{getLoadData}</button>

           <h2>{getInitial1.name}</h2>
           {getInitial.map((item)=>(
            <h3>{item.name}</h3>
           ))}
           
        </div>
    );
}