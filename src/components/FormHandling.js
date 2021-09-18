import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(){
        super();
        this.state={
            user : null,
            password : null
        }
    }

    submit(){
        console.warn(this.state);
    }

    render() {
        return (
            <div>
                <h1>Form Handling</h1>
                <label>Username  </label>
                <input 
                type="text" 
                name="user" 
                onChange={(e)=>{this.setState({user:e.target.value})}}
                />
                <br /><br />
                <label>Password  </label>
                <input 
                type="password" 
                name="password"
                onChange={(e)=>{this.setState({password:e.target.value})}} 
                />
                <br /><br />

                <button onClick={(e)=>this.submit()}>Submit</button>
            </div>
        );
    }
}

