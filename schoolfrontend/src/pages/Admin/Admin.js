import React, { Component } from "react";




class Admin extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.setState({user: "me"})
  }

  user = () => {
    //this.setState({ user: "me" });
        console.log(this.state);

  };


  render() {

   

    return (
      <div>
        <h1 onClick={this.user}>stuff</h1>
        <button onClick={() => this.setState({ user: "me" })}></button>
        </div>
     
    );
  }
}

export default Admin;


