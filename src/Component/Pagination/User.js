import React from "react";
import List from "./ListItem";

export const USER_SLECT_PAGE = 5;

export default function User({users,pages}){
    console.log("users",users,pages);
    const startindex =  (pages-1)*USER_SLECT_PAGE;
    const selectuser = users.slice(startindex, startindex + USER_SLECT_PAGE);

    return selectuser.map((item)=>(

        <List item={item}/>
    ))
}