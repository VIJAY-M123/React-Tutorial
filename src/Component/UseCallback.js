import React, { useCallback, useState } from "react";
import Item from "./TodoItem";

export default function Callback(){
    const[count,setCount]=useState(0);
    const[item,setItem]=useState([]);
    console.log(item)

    function increment(){
        setCount(count+1);

    }

    const additem = useCallback(()=>{
         setItem((t)=>[...t,"new Item"])
    },[item]);

    return(
        <div>
            <Item item={item} add={additem}/>
            <h1>Call</h1>
            <h2>count:{count}</h2>
            <button onClick={increment}>+</button>
            
        </div>
    );
}