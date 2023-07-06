import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



export default function Dashboard(){
    const History = useHistory();
    
    const[Log,setlog]=useState(false);


    useEffect(()=>{
        //localStorage.getItem("auth")History.push("/login")
        if(!localStorage.getItem("auth")) History.push("/login")
    },[Log]);

    const Logout=()=>{
     localStorage.removeItem("auth")
     setlog(true);
    }

    return(
        <div>
            <div>  <h3>Dashboard</h3></div>
            <div>
                <button onClick={Logout}>Logout</button>
            </div>
          
            
        </div>
    );
}