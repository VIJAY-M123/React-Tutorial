import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiCall(){
    const[user,setUser]=useState([]);
      console.log("s",user)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUser(res.data))
    });


    
     
     
    return(
        <div>
            <h2>Axois Api Call</h2>
            {
                user.map((item)=>(
                    <h2>{item.name}</h2>
                ))
            }
        </div>
    );
}