import React, { useState, Component } from "react";
export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      const { email, password } = this.state;
      console.log(email, password);
      fetch("http://localhost:3000/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./userDetails";
          }
        });
    }
    render () {
        return (
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor = "email">Email</label>
                    <input onChange={(e) => this.setEmail(e.target.value)} type = "email" placeholder="joe@gmail.com" id = "Lemail" name = "email"/>
                    <label htmlFor = "password">Password</label>
                    <input onChange={(e) => this.setPass(e.target.value)} type = "password" placeholder="**********" id = "Lpassword" name = "password"/>
                    <button type = "submit">Log In</button>
                </form>
                <a href="/Register">Don't have an account? Register</a>
                {/* <button className="link-btn" onClick = {() => this.onFormSwitch('register')}>Don't have an account? Register</button> */}
            </div>
        )
    }
}