import React, { Component } from "react";
import axios from 'axios';




class Admin extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000/';
    this.state = {  
      students: [],
      teachers: [],
      teacherStyle: {
        marginBottom: "100px",
        marginTop: "100px"
      },
      bold: {
        fontWeight: '700'
      }
    };
    this.user_ref = React.createRef();
}



  componentDidMount() {
    this.getStudents();
    this.getTeachers();
  }

  getStudents = () => {
    axios.get(this.URI + "students")
    .then(res => this.setState({ students: res.data}))
    .catch(err => console.log(err));
  };

  getTeachers = () => {
    axios.get(this.URI + "teachers")
    .then(res => this.setState({ teachers: res.data}))
    .catch(err => console.log(err));
  };

  student = (event) => {
    document.getElementById("student").innerHTML = event.target.innerText;
  }

  teacher = (event) => {
    document.getElementById("teacher").innerHTML = event.target.innerText;
  }

  assign = () => {
    axios.put(this.URI + "students/" + document.getElementById("student").innerHTML, {
      teacher: document.getElementById("teacher").innerHTML
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  };

  




  render() {


    return (
      <div>
        <div id="students">
          <p  style={this.state.bold}>Students</p>
          { this.state.students.map( student => <p onClick={this.student}>{student.username}</p>) }
          <p id="student" style={this.state.bold}></p>
        </div>
        <div id="teachers" style={this.state.teacherStyle}>
        <p  style={this.state.bold}>Teachers</p>
          { this.state.teachers.map( teacher => <p onClick={this.teacher}>{teacher.username}</p>) }
          <p id="teacher" style={this.state.bold}></p>
          

          </div>
          <button onClick={this.assign}>Assign</button>
        </div>
     
    );
  }
}

export default Admin;




