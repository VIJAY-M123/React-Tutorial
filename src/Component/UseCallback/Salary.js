import React, { memo } from "react";

 function Salary({salary, increment, text}){

    console.log(`rerender- ${text}`);
    return(
        <div>
            <h3>Salary:{salary}</h3>
            <button onClick={increment}>Salary Increment</button>
        </div>
    )
}
export default memo(Salary)