import React, { Component } from "react";
import axios from 'axios'

class Home extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.state = {user: null};
}

  state = {
    style: {
        color: "red"
  }
  };

  componentDidMount() {

  }

  login = () => {
    const user = {
      "username": "mm"
  }
    axios.post(this.URI + '/users', user)
    .then(res => {
        console.log(res);
        this.setState({ user: "mm" });
    });
  };


  render() {
    const user = this.state.user
    if (user) {
        return this.state.user
    }
    else {
      return (
          <div id="content">
            <p>Username</p>
            <input type="text" name="username"/>
            <p>Password</p>
            <input type="password" name="password"/><br></br>
            <button id="loginbutton" onClick={this.login}>Log In</button>
          </div>
      );
    }
  }
}

export default Home;