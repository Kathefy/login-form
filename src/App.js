import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <div className="loginForm">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              required="required"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required="required"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required="required"
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default App;
