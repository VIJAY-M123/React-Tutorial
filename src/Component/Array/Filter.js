import React from 'react';
import { useState } from 'react';

const s =[
    {
        "name": "Sandra Schaefer",
        "email": "Bethany12@yahoo.com",
        "postCode": "65665",
        "city": "Palm Harbor",
        "country": "Slovakia (Slovak Republic)",
        "phoneNumber": "379-607-0449",
        "favouriteQuote": "Qui consectetur repellendus commodi."
    },
    {
        "name": "Mark Veum",
        "email": "Jedediah.Beer26@yahoo.com",
        "postCode": "89859",
        "city": "Montebello",
        "country": "Myanmar",
        "phoneNumber": "779.494.2905 x0531",
        "favouriteQuote": "Corrupti assumenda enim alias suscipit maxime molestiae quis laboriosam."
    },
]

const get =s.find((obj) =>obj.name ==="Sandra Schaefer")
//console.log("DET",get);




function Filter() {
    
   // console.log("input",s);
    

    const [Count,setCount]=useState(0);

    const [Data,setDate]=useState([get]);
    
   // console.log("Data",Data)
    //console.log(typeof(Data))

    const add = () =>{
       setCount(Count+1)
       //console.log(setCount);
    }
    
    

   
    

    return (
        <div>
            <h2>Hiii</h2>

           
            <h2>{Count}</h2>
            <button onClick={add}>Add</button>

            {
               Data.map((obj,index)=>(
                <h2 key={index}>{obj.name}</h2>
               ))
            }

           

             
        </div>
    );
}

export default Filter;