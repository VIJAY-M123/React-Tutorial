import React from "react";
import "./Styles.css";
import { Col, Row } from "react-bootstrap";

export default function Index() {



    const Like = () =>{
        const like = "Clicked like"
     sessionStorage.setItem("Like", like  )
    }

    const Share = () =>{
        const share = "Clicked Share"
        sessionStorage.setItem("Share", share )
       }

    const Comments = () =>{
        const com = "Clicked commends"
     sessionStorage.setItem("Comments", com )
    }

    const Report = () =>{
        const Report = "Clicked Share"
        sessionStorage.setItem("Report", Report)
       }


    return (
        <div>
            <div className="main" >

                <Row>
                    <Col>
                        <Row className="mt-2">
                            <Col>
                                <h2>Digital Triumph</h2>
                            </Col>

                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <button onClick={Like}>Like</button>
                            </Col>

                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <button onClick={Share}>Share</button>
                            </Col>

                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <button onClick={Comments}>Comments</button>
                            </Col>

                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <button onClick={Report}>Report</button>
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </div>


        </div>
    )
}