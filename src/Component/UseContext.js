import React, { useContext } from "react";
import { UserContext } from "../App";

// const name =useContext(UserContext)
export default function Context(){
    return(
       
        <div>
           <UserContext.Consumer>
            {values =>
            <h2>My name is {values}</h2>
            }
          </UserContext.Consumer>  
        </div>
        
       
    );
}