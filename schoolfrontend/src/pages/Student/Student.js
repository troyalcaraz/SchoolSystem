import React, { Component } from "react";
import axios from 'axios'


class Student extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000';
    this.state = {user: null};
  }

  state = {

    user: ""
    
  };

  componentDidMount() {

    
  }
  
  //More than likely will pass props into the function
  GradeList(grades) {
    /*If props are passed in:
    const sGrades = props.grades */
    const sGrades = grades;
    const listGrades = sGrades.map((grade) =>
      <li>{grade}</li>
    );
    return (
      <ul>{listGrades}</ul>
    )
  }


  render() {

    this.state.user = {username: 'Troy', grades: [{class: 'Science', grade: 'A'}, {class: 'PE', grade: 'B'}, {class: 'History', grade: 'C'}, {class: 'English', grade: 'D'}, {class: 'Art', grade: 'F'}]}

    return (
      //If props: ...this.props.username? or this.props.fullname
      <>
        <h1> {this.state.user.username} </h1>
        <div>
          {this.state.user.grades.map((grade) => 
            <p>{grade.class} : {grade.grade}</p>
          )}
        </div>
      </>
     
    );
  }
}

export default Student;