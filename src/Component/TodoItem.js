import React, { memo } from "react";

 function Item({item, add}){
    console.log("Hiii");
    return(
        <div>
            <h2>Item</h2>
            {
                item.map((item,index)=>{
                    return <p key={index}>{item}</p>;
                })
            }
            <button onClick={add}>additem</button>
        </div>
    );
} 
export default memo(Item)