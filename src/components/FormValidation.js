import React, { Component } from 'react'

export default class FormValidation extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            nameError: "",
            passwordError: ""
        }
    }

    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 8) {
            this.setState(
                { nameError: "Invalid Name", passwordError: "Password length should be 8" }
            );
        } else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Name" });
        } else if (this.state.password.length < 8) {
            this.setState({ passwordError: "Password lenth should be more than 8" });
        } else {
            return true;
        }
    }

    submit() {

        this.setState(
                { nameError: "", passwordError: "" }
            );

        if (this.valid()) {
            alert("Form has been submitted")
        }
    }
    render() {
        return (
            <div>
                <h1>Form Validation</h1>
                <p></p>
                <label>Username</label>
                <input
                    type="text"
                    onClick={(event) => {
                        this.setState({ name: event.target.value })
                    }}
                />
                <p style={{ color: "red", fontSize: "14px" }} >{this.state.nameError}</p>
                <label>Password</label>
                <input
                    type="text"
                    onClick={(event) => {
                        this.setState({ password: event.target.value })
                    }}
                />
                <p style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</p>
                <button onClick={() => this.submit()}>Submit</button>

            </div>
        )
    }
}
