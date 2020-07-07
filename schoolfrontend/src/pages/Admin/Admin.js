import React, { Component } from "react";
import axios from 'axios'
import styles from '../../App.css';


class Admin extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.state ={
      users: []
    }
    this.user_ref = React.createRef();
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get(this.URI + "/users")
    .then(res => this.setState({users: res.data}))
  }

  user = (event) => {
    document.getElementById("user").innerHTML = event.target.innerText;
  }

  remove = (event) => {
    var name = event.target.previousSibling.wholeText
    console.log(name)
    axios.delete(this.URI + '/users/' + name)
      .then(res => console.log(res.data))
  };

  render() {
    return(
      <div id="users">
          <p  style={this.state.bold}>Users</p>
          { this.state.users.map(user =>
            <>{user.fullname}<button onClick={this.remove}>Delete</button><br/></>)}
          <p id="user" style={this.state.bold}></p>
      </div>
    );
  }
}

export default Admin;
