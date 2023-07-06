import React from "react";
import { useEffect } from "react";

export default function Home(){

    useEffect(()=>{
        const Like = sessionStorage.getItem('Like');

        const Share = sessionStorage.getItem('Share');

        const Comments = sessionStorage.getItem('Comments');

        const Report = sessionStorage.getItem('Report');

        console.log('Like:', Like); 

        console.log('Share:', Share); 

        console.log('Comments:', Comments); 

        console.log('Report:', Report); 

    })
    
    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}