// import e from "express";
import React, {Component} from "react";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {uname, email, password} = this.state;
        console.log(uname, email, password);
        fetch("http://localhost:3001/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                uname,
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data, "userRegister");
        });
    }
    render() {
        return (
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <label htmlFor= "name">Name</label>
                    <input onChange={(e) => this.setState({uname:e.target.value})} type = "text" placeholder="Joe" id = "name" name = "name"/>
                    <label htmlFor = "email">Email</label>
                    <input onChange={(e) => this.setState({email:e.target.value})} type = "email" placeholder="joe@gmail.com" id = "Lemail" name = "email"/>
                    <label htmlFor = "password">Password</label>
                    <input onChange={(e) => this.setState({password:e.target.value})} type = "password" placeholder="**********" id = "Lpassword" name = "password"/>
                    <button type = "submit">Register</button>
                </form>
                <p className="forgot-password text-right">
                    Already registered? <a href="/Login">Sign in</a>
                </p>
            </div>
        )
    }
}