import React, { Component } from "react";
import axios from 'axios'
import StudentService from '../../service/student.service'

class Home extends Component {
  studentService = new StudentService();
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.state = {user: null};
    this.user_ref = React.createRef()
}

  state = {
    style: {
        color: "red"
  },
    user: ""
  };

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
           alert('you are an admin')
          //  this.setState()
          //  <Link to="../Admin/Admin.js">
          window.location = "/Admin"
         }
         else if (res.data.role === 'teacher'){
           alert('you are a teacher')
           window.location = "/Teacher"
         }
         else if (res.data.role === 'student'){
          this.studentService.getStudentGrades(res.data.username).then(res => {
            console.log('Username: ' + res);
            //this.props.queryMedia(res.data);
          })
          alert('you are a student')
          window.location = "/Student"
        }
        else {
          alert('you are a NUN')

        }
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
            <input type="text" ref={this.user_ref} name="username"/>
            <p>Password</p>
            <input type="password" name="password"/><br></br>
            <button id="loginbutton" onClick={this.login}>Log In</button>
          </div>
      );
    }
  }
}

export default Home;