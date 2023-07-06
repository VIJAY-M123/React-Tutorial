import React, { Component } from "react";

export default class Event extends Component{

    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount() {
        window.addEventListener("mousemove",this.handleMousePosition);
        }
        
    componentWillUnmount() {
        window.removeEventListener("mousemove",this.handleMousePosition);
        //console.log("remove",this.handleMousePosition)
    }
    
    handleMousePosition=(event)=>{
        console.log("handle",event)
    }

    render(){
        return(
            <div>
                <h2>Class Component</h2>
            </div>
        );
    }
}