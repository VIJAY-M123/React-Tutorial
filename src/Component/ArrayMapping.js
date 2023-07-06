import React from "react";


const Menu = [
    {
        name: "vijay",
        skills: [
            {
                name: "reactjs",
                type: "frontend",
            }
        ]
    },
    {
        name: "vijay",

    },

]

export default function Arr() {
    return (
        <div>

            {
                Menu.map((item, index) => (

                    <div key={index}>
                        <h2 >{item.name}</h2>
                        <div>
                            if(item.skills)
                            {
                                item.skills.map((obj, index) => (
                                    console.log("D",obj)
                                    //<h2 key={index}>{obj.name}</h2>
                                    
                                ))
                            }
                            
                        </div>

                    </div>








                ))
            }
        </div>
    );
}