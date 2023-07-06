import React, { useEffect } from "react";
import axios from "axios";

export default function Await() {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()
                .then(data => console.log(data))
            )
    });

    useEffect(() => {

        const Data = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log("Data", res);

        }
        Data();

    }, []);



    return (
        <div>
            <h3>Await</h3>

        </div>
    );
}