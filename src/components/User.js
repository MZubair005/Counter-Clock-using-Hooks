import React, { Component } from 'react'

export default class User extends Component {

    componentWillUnmount() {
        alert("User has been deleted");
    }
    render() {
        return (

            <div>
                <ul>
                    <li>Name : Zubair</li>
                    <li>Email : Zubair@abc</li>
                    <li>Contact : 9021528317</li>
                </ul>
            </div>
        );
    };
};


/*

class Method extends React.Component{
    constructor(){
        super()
        this.state = {
            active : null,
            who : null
        }
        console.warn("Constructor");
    }
    componentWillUnmount(){
        console.warn("componentDidUpdate");
        if(this.state.who == null){
            this.setState({who:"Zubair"})
        }
    }
    render(){
        // console.warn("render")
        return(
            <div>
                <h1>Life Cycle Method : componentWillUnmount : {this.state.who}</h1>
                <button onClick={()=>{this.setState({active:"yes"})}} >Avtivate</button>
            </div>
        );
    };
};


export default Method;



class Hide extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
    };
    render() {
        return (
            <div>
                {this.state.show ?
                    <h1>Hide and Show</h1> : null
                };
                <button onClick={() => { this.setState({ show: ! this.state.show }) }} >Toggle me</button>

            </div>
        );
    };
};

export default Hide;


export default class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "Zubair",
            email : "Zubair@gmail.com",
            count : 0
        }
    }

    updateState(){
        this.setState({
            name: "Rizwan",
            count : this.state.count+1
        })
    }
        render(){
            return(
                <div>
                  <h1>Hello {this.state.name}</h1>
                  <h1>Email: {this.state.email}</h1>
                  <h1>Count {this.state.count}</h1>

                  <button onClick={()=>{this.updateState()}} >Update Name</button>
                </div>
            );
        };
};
*/

// export default function Profile(props) {
//     return(
//         <div>
//             <h1>{props.text.name}</h1>
//             <h1>{props.data}</h1>
//         </div>
//     )
// }

