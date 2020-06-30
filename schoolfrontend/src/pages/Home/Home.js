import React, { Component } from "react";




class Home extends Component {
  state = {
    style: {
        color: "red"
  }
  };

  componentDidMount() {

    
  }

  login = () => {
    alert("test")
  };




  render() {

   

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

export default Home;