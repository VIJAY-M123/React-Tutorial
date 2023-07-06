import React from "react";
import { Container } from "react-bootstrap";
import "./Video.css"
import video from "../../Assets/Video/Prowesstics.mp4"

export default function Video(){
    return(
        <div className="Container">
            <video src={video} autoPlay loop muted className="video_bg"/>
               
          
             
        </div>
           
       
    );
}