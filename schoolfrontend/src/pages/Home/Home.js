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
        <div>
          <p>Username</p>
          <input></input>
          <p>Password</p>
          <input></input>
          <button id="loginbutton" onClick={this.login}></button>
        </div>
     
    );
  }
}

export default Home;