import React, { Component } from "react";
import axios from 'axios'
import styles from '../../App.css';


class Admin extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.state = {area: null};
    this.state = {username: 'test'};
    this.state = {password: ''};
    this.state = {fullname: ''};
    this.state = {address: ''};
    this.state = {role: ''};
    this.state = {adduser: ''};
  }

  state = {
    area: null,
    content: {
      
    }
  };

  componentDidMount() {    
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  toAdminMain = () => {
    this.setState({ area: null});
  }

  to_add_user = () => {
    console.log('in add user')
    this.setState({ area: 'adduser'});
  }

  to_main = () => {
    window.location = "/"
  }

  add_user = () => {
    const user = {
      "username": this.state.username,
      "password": this.state.password,
      "fullname": this.state.fullname,
      "address": this.state.address,
      "role": this.state.role
    }

    axios.put(this.URI + '/users', user)
    .then(res => {
          console.log(res.data.role);
          this.setState({ user: res.data.username});
          if (res.data){
            this.setState({ adduser: "Added User successfully!"});
          }
          else{
            this.setState({ adduser: "Something went wrong."});
          }
      });
  }


  render() {
    if (this.state.area === 'adduser'){
      return(
        <center>
          <div id="title"><h1>School System - Admin</h1></div>
          <div id="content">
            <table align="center">
              <tr>
                <td>Username:</td>
                <td><input type='text' name="username" value={this.state.username} onChange={e => this.handleChange(e)}/></td>
              </tr>
              <tr>
                <td>Fullname:</td>
                <td><input type='text' name="fullname" value={this.state.fullname} onChange={e => this.handleChange(e)}/></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td> <input type='password' name="password" value={this.state.password} onChange={e => this.handleChange(e)}/></td>
              </tr>
              <tr>
                <td>Address:</td>
                <td><input type='text' name="address"value={this.state.address} onChange={e => this.handleChange(e)}/></td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>
                  <select name="role"  onChange={e => this.handleChange(e)} value={this.state.role}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            </table>
            <button onClick={this.add_user}>Add the user</button>
            <button onClick={this.toAdminMain}>Back</button>
            <br></br><br></br>
            {this.state.adduser}
          </div>
        </center>
      )
    }
    else{
      return (
        <center>
          <div id="title"><h1>School System - Admin</h1></div>
          <div id="content">
            <h1>Admin</h1>
            
            <button id="adduserbtn" onClick={this.to_add_user}>Add User </button>
            <button id="to_main" onClick={this.to_main}>Log out </button>
          </div>
        </center>
      );
    }
    
  }
}

export default Admin;




