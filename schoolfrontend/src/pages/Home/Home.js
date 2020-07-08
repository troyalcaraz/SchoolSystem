import React, { Component } from "react";
import { connect } from 'react-redux';
import Student from '../Student/Student';
import StudentService from '../../service/student.service';
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.login = this.login.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  studentService = new StudentService()

  componentDidMount() {

  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
        this.login();
    }
  }

  handleInput(e) {
    console.log(this.props)
    this.props.dispatch( { type: 'handleUsername', username: e.target.value } )
  }

  login = () => {
    console.log(this.props)
    this.studentService.login(this.props.username).then(res => {

        console.log(res.data.role);
        console.log(res.data.username)
        this.props.dispatch( { type: 'login', username: res.data.username})
        //The user is an admin
        if (res.data.role === 'admin'){
          alert('you are an admin')
          window.location = "/Admin"
        }
        //The user is a teacher
        else if (res.data.role === 'teacher'){
          alert('you are a teacher')
          window.location = "/Teacher"
        }
        //This user is a student
        else if (res.data.role === 'student'){
          console.log(this.props)
          console.log(res.data)
          this.props.dispatch( { type: 'handleUser', user: res.data})
          //alert('you are a student')
        }
        //Not sure what the user is
        else {
          alert('you are a NUN')
        }

    });
  };

  
  handleLogout = () => {
    console.log(this.props)
    this.studentService.logout().then(res =>
      {
        this.props.dispatch({ type: 'logout', username: '', user: null})
      })
  } 


  render() {

    if (this.props.user) {
      return (
        <>
          <Student user={this.props.user}/>
          <p>
          <button id="logout" onClick={this.handleLogout}>Logout</button></p>
        </>
      )
    }
    else {
      return (
        <>
          <div id="content">
            <p>Username</p>
            <input type="text" value={this.props.username} 
            onChange={ this.handleInput } onKeyDown={ (e) => this.handleKeyDown(e) }></input>
            <p>Password</p>
            <input type="password" name="password"/><br></br>
            <button id="loginbutton" onClick={this.login}>Log In</button>
          </div>
        </>
      );
    }
  }
}

function mapStateToProps(state) {
  const {user, username} = state;
  return {user: user,
          username: username}
}

export default connect(mapStateToProps)(Home);