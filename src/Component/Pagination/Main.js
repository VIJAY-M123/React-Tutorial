import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
import Page from "./Pagination";
import { USER_SLECT_PAGE } from "./User";

export default function Main() {
    const [Users, setUsers] = useState([]);
    console.log("User1",Users);
    const [Loading, setLoading] = useState(false);
    const [pages, setPage]=useState(1);
    const [Totalpages, setTotalpages]=useState(0);
    console.log("total",Totalpages);
   


    useEffect(() => {
        const FetchUser = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setLoading(false);
            setUsers(res.data)
            setTotalpages(Math.ceil(res.data.length/USER_SLECT_PAGE))
        }
        FetchUser();

    }, []);

     const handle=(num)=>{
        setPage(num)
     }
    return (
        <div>
            <h2>Pagination demo</h2>
            <h3>page{pages}</h3>
            {Loading ? <p>Loding....</p> : <>
                <User users={Users} pages={pages}/>
                <Page total={Totalpages} handle={handle}/>
            </>}
        </div>
    );
}