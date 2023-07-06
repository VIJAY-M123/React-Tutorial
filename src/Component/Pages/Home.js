import React, { useState } from "react"

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as UserAction from "../Action/action";

export default function Home(){
    const[getdata,setdata]=useState({
        id:"",
        name:"",
        password:"",
    })

   const dispatch=useDispatch();

    const Handle=(event)=>{
         const{name, value} = event.target;
         console.log(name,value)
         setdata((previousItem)=>{
            return {
                ...previousItem
                [name]=value
            }
         })
    }
    const Add=()=>{
        dispatch(UserAction.AddUser(getdata))
        console.log("s",getdata)
        setdata({
            id:"",
        name:"",
        password:"",
        })
    }

    return(
        <div>
            <h2>Home</h2>
            <input name="id" placeholder="id" value={getdata.id} onChange={Handle}/><br/>
            <input name="name" placeholder="Username" value={getdata.name} onChange={Handle}/><br/>
            <input name="password" type="password" placeholder="Password" value={getdata.password} onChange={Handle}/><br/>
            <button type="submit" onClick={Add}>Add</button>

            <Link to="/users">UserList</Link>
        </div>
    );
}