import React, { useState } from "react";

export default function Add(){
    
    const[getdata, setdata]=useState(0);  //usestate hook 
    const[adds, setadd]=useState(0)

    const Adds = ()=>{  //This is arrow function declaration.
       setdata(getdata+1);
    }

    function add(){ //This function declaration
        setdata(getdata+1);
    }
   

    return(
        <div>
            <h2>{getdata}</h2>
            <button onClick={add}>Add</button>
            <h2>{adds}</h2>
            <button onClick={()=>setadd(adds+1)}>add</button>

           
           
        </div>
    );
}