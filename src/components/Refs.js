import React, { Component } from 'react'

export default class refs extends Component {
    constructor() {
        super()
        this.userRef = React.createRef(); //1.Creat ref
    }
    editVal(){
        // console.warn(this.userRef)
        // this.userRef.current.focus();
        this.userRef.current.value = "100000";
    }
    render() {
        return (
            <div>
                <h1>Refs</h1>
                <input ref={this.userRef} type="text" name="user"/> {/* //tag to the element for refernece */}
                <button onClick={()=>this.editVal()}>Click me</button>
            </div>
        )
    }
}
