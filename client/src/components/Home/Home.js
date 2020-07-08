import React, { Component } from "react";
import styles from '../../App.css';
import axios from 'axios'
import Login from '../login.component';
import App from "../../App";
import '../../App.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.user_ref = React.createRef()
}


  componentDidMount() {

  }

  login = () => {
    console.log(this.user_ref.current.value)

    const user = {
      "username": this.user_ref.current.value
  }
    axios.post(this.URI + '/users', user)
    .then(res => {
        console.log(res.data.role);
         this.setState({ user: res.data.username});
         if (res.data.role === 'admin'){
           //alert('you are an admin')
          //  this.setState()
          // <Link to="/adminMenu.component"></Link>
          window.location = "/adminMenu.component"
         }
         else if (res.data.role === 'teacher'){
           //alert('you are a teacher')
           window.location = "/Teacher"
         }
         else if (res.data.role === 'student'){
          //alert('you are a student')
          window.location = "/Student"

        }
        else {
          alert('you are a NUN')

        }
    });
  };


  render() {
    const user = this.props.user
    if (user) {
        return this.props.user
    }
    else {
      return (


        <center>

          <div id="title"><h1>School System</h1></div>
          <div id="content">
            <Login/>
            Username<br/>
            <input type="text" ref={this.user_ref} name="username"/><br/>
            Password<br/>
            <input type="password" name="password"/><br></br>
            <button id="loginbutton" onClick={this.login}>Log In</button>
          </div>
          </center>
      );
    }
  }
}

export default Home;