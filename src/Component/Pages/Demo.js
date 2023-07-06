import React, { useState } from "react";

export default function demo(){
    const [getData,setData]=useState({
        username:"",
        password:"",
        email:"",
    })
     const Handle=(e)=>{
        const[name,passsword]=e.target.value;
        
     } 

    return(
        <div>
            <input name="name" type="text" placeholder="Username" value={getData.username} onChange={Handle}/>
            <input  name="passsword" type="password" placeholder="Password" value={getData.password} onChange={Handle}/>
            <input name="email" type="email" placeholder="Email" value={getData.email} onChange={Handle}/>
            <button>Submit</button>

        </div>
    );
}