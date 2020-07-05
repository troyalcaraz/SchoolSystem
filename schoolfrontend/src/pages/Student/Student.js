import React, { Component } from "react";
//import axios from 'axios';
//import Home from '../Home/Home';


class Student extends Component {
  constructor(props){
    super(props);
  }

  state = {
    user: {username: '', grades: []}
    
  };

  handleShowGrades = () => {
    this.setState({
      user: {username: 'Troy', grades: [{class: 'Science', grade: 'A'}, {class: 'PE', grade: 'B'}, {class: 'History', grade: 'C'}, {class: 'English', grade: 'D'}, {class: 'Art', grade: 'F'}]}
    })
  }
  
  render() {

    return (

      <>
        <h1> {this.state.user.username} </h1>
        <div>
            {this.state.user.grades.map(grade => 
              <p key={grade.class}>{grade.class} : {grade.grade}</p>
            )}
          </div>
        <button id="gradebutton" onClick={this.handleShowGrades}>Grades</button>
      </>
     
    );
  }
}

export default Student;