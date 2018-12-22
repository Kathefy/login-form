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
      <div className="container">
        <input
          className="inputText"
          type="text"
          name="name"
          required="required"
          value={this.state.value}
          onChange={this.changeValueName}
        />
        <span class="labelFloat">Full Name</span>
      </div>
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
      <div className="container">
        <input
          className="inputText"
          type="email"
          name="email"
          required="required"
          value={this.state.value}
          onChange={this.changeValueEmail}
        />
        <span class="labelFloat">Email</span>
      </div>
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
      <div className="container">
        <input
          className="inputText inputTextLast"
          type="password"
          name="password"
          required="required"
          value={this.state.value}
          onChange={this.changeValuePassword}
        />
        <span class="labelFloat">Password</span>
      </div>
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
