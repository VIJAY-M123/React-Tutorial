import React from "react";
import Excel from "./Export Excel";

export default function Index(){
    const ExcelData =[
        {
            "firstname":"vijay",
            "lastname":"M",
            "emp_id":"90",
            "DOB":"19-08-1999"
        }
    ]
    return(
        <div>
            <h2>Export Excel</h2>
            <Excel Data={ExcelData} filename={"Excel Export"}/>
        </div>
    )
}