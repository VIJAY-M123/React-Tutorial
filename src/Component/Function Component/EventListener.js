import React, { useEffect } from "react";

export default function List(){

    const Handle =(event) =>{
          console.log("handle",event)
    };

    useEffect(()=>{
            //   window.addEventListener("output",Handle);
              
              window.addEventListener('mousemove', () => {});
              
                return ()=>{
                    window.removeEventListener('mousemove', () => {});
                    console.log("hii")
                };
    },[]);

    return(
        <div>
            <h2>function component</h2>
        </div>
    );
}