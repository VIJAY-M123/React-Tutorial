import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Lazy(){

    const[Image, setImage]=useState([]);
    console.log("D",Image);

    useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/photos")
          .then(Res=>Res.json())
          .then(Result=>setImage(Result))

    },[]);

    return(
        <div>
            {Image.map((Obj)=>{
                return(
                    <LazyLoadImage src={Obj.url} key={Obj.id} height="500px" width="400px"/>
                )
            })}
           
        </div>
    );
}