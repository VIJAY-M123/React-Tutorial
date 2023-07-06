import React, { memo } from "react";

 function Title(){

    console.log("Rerender-title");

    return(
        <div>
            <h3>UseCallback</h3>
        </div>
    )
}
export default memo(Title)