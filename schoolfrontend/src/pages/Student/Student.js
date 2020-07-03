import React, { Component } from "react";
//import axios from 'axios';
//import Home from '../Home/Home';


class Student extends Component {
  constructor(props){
    super(props);
    this.state = {user: null};
  }

  state = {

    user: ""
    
  };

  showGrades() {
    this.state.user = {username: 'Troy', grades: [{class: 'Science', grade: 'A'}, {class: 'PE', grade: 'B'}, {class: 'History', grade: 'C'}, {class: 'English', grade: 'D'}, {class: 'Art', grade: 'F'}]}

    return (
      <>
        <h1> {this.state.user.username} </h1>
        <div>
          {this.props.user.grades.map((grade) => 
            <p>{grade.class} : {grade.grade}</p>
          )}
        </div>
      </>
    )
  }

  render() {

    return (

      <>
        <button id="gradebutton" onClick={this.showGrades}>Grades</button>
      </>
     
    );
  }
}

export default Student;