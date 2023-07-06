import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export const emailValidator = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email)
}

export const passwordValidator = password => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
}


export default function Login(){

    const History = useHistory();

    const[Emailerror,EmailsetError]=useState('')
    const[Success,setSuccess]=useState('')

    const[Input,setInput]=useState({
        Email:"",
        Password:"",
    })

    const Handle=(e)=>{
        setInput({...Input,[e.target.name]:e.target.value})

    }


    useEffect(()=>{
        if(localStorage.getItem("auth")) History.push("/home")
    });

    const submit=(e)=>{
        e.preventDefault();
        setSuccess("") ///

        if(!emailValidator(Input.Email)) 
            return EmailsetError("Please enter valid email id");

        if(!passwordValidator(Input.Password)) 
            return EmailsetError("Password nor match");
        
        //setSuccess("Valid successfully")
        if(Input.Email !== 'vijay@gmail.com' || Input.Password !== 'Vijay@123')

            return setSuccess('Invalid email or password');
        
        History.push("/home");

        localStorage.setItem("auth",true);

    }
    return(
        <div>
            <h3>login</h3>
            {Emailerror.length> 0 &&  <div style={{marginBottom:"20px", color:"red"}}>
            {Emailerror}
            </div>
            }
            {Success.length> 0 &&  <div style={{marginBottom:"20px", color:"green"}}>
            {Success}
            </div>
            }
            
             <div>
                <input type="email" name="Email" placeholder="Email" value={Input.Email} onChange={Handle}/><br/>
             </div>

           
             <div className="mt-3">
                <input type="text" name="Password" placeholder="Password" value={Input.Password} onChange={Handle}/><br/>
             </div>
           
            
            <button onClick={submit}>Login</button><br/>
        </div>
    );
}