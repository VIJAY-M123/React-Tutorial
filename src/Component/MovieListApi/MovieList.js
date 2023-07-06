import React from "react";


export default function MovieList(props){
    const {object} = props;

    console.log("props",props);
    return(
        <div>
           <ul>
            {
                object.map((item)=>(
                    <li key={item.id}>
                      {item.title}
                    </li>
                ))
            }
           </ul>
        </div>
    )
}