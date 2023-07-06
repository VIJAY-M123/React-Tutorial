import React from "react";
import Fetch from "./UseFetch";

export default function Custom(){

    const [Data]=Fetch("https://jsonplaceholder.typicode.com/users")

    return(
        <div>
            {Data && 
            
            Data.map((item) => {
                return <p key={item.id}>{item.name}</p>;
              })
            }

        </div>
    );
}