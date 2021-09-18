import React, { Component } from 'react'

export default class ListRendering extends Component {
    constructor() {
        super();
        this.state = {
            list:[
                {name: 'abbu', phone:444,email: 'abbu@gmail.com'},
                {name: 'Rizwan', phone:222,email: 'rizwan@gmail.com'},
                {name: 'Zubair', phone:111,email: 'zubair@gmail.com'}
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Listing with map()</h1>

                {this.state.list.map((item)=> 
                <div>
                    <span><strong>Name : </strong>  {item.name}</span><br />
                    <span><strong>Email : </strong> {item.email}</span><br />
                    <span><strong>Phone : </strong> {item.phone}</span><br />
                    </div>)}
            </div>
        )
    }
}
