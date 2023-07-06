import React, { useCallback, useState } from "react";
import Count from "./Count";
import Salary from "./Salary";
import Title from "./Title";

export default function Parent(){

 const[count, setCount]=useState(0)
 const[salary, setsalary]=useState(10000)

 const Add = useCallback(
    () =>{
        setCount(count+1)
     },[count]
    
 ) 
 const salaryincrement = useCallback(
    () =>{
        setsalary(salary+1000)
     },[salary]
 ) 
 
    return(
        <div>
            <Title/>
            <Count Add={Add} count={count}/>
            <Salary increment={salaryincrement} text="salary" salary={salary}/>
        </div>
    )
}