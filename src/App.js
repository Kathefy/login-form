import React, { Component } from "react";
import "./App.css";

class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  changeValueName = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        required="required"
        value={this.state.value}
        onChange={this.changeValueName}
      />
    );
  }
}
class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  changeValueEmail = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <input
        type="email"
        placeholder="Email"
        name="email"
        required="required"
        value={this.state.value}
        onChange={this.changeValueEmail}
      />
    );
  }
}
class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  changeValuePassword = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <input
        type="password"
        placeholder="Password"
        name="password"
        required="required"
        value={this.state.value}
        onChange={this.changeValuePassword}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <div className="loginForm">
            <UserName />
            <Email />
            <Password />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default App;
