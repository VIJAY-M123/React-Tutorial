import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Example(){

   const[Count, setCount]=useState(0);

   const[getData, setData]=useState([])
   console.log("Data",getData);

   const add=()=>{
    setCount(Count+1);
   }

   useEffect(()=>{
           fetch("https://jsonplaceholder.typicode.com/users")
           .then(res=>res.json())
           .then(res=>setData(res))
   },[]);

   useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>console.log(res.data))

   });

   useEffect(()=>{
    const Data=async()=>{
        const api=await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(api);
    }
   });

   useEffect(()=>{
         
         setInterval(()=>{
            console.log("HIi")
         },1000);
   });


    return(
        <div>
            <h2>Hiii</h2>
            <h2>{Count}</h2>
            <button onClick={add}>Add</button>

            {getData.map((item,index)=>(
                <h4 key={index}>{item.name}</h4>
            ))}
        </div>
    );
}