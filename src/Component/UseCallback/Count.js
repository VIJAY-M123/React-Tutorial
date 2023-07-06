import React, { memo } from "react";

 function Count({Add, count}){

    console.log("count-rerender");
    return(
        <div>
            <h5>Count:{count}</h5>
            <button onClick={Add}>Add</button>
        </div>
    )
}
export default memo(Count)