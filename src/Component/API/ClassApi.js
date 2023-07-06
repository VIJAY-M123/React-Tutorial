import React from "react";
import { Component } from "react";

export default class ClassApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, data:[],
             
        }

    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(response => this.setState({
                data: response
            }))

    }
    render() {
        return (
            <div>
                <h2>Hii</h2>
                <h2>{this.state.count}</h2>
                {
                    this.state.data.map((item) => (
                        <h2 key={item.id}>{item.name}</h2>
                    ))
                }
            </div>
        )
    }
}