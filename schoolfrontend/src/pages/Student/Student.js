import React, { Component } from "react";
import axios from 'axios';


class Student extends Component {
  constructor(props){
    super(props);
    //this.state = props.user
  }

  state = {
    user: {fullname: '', username: '', grades: []}
    
  };

  
  handleShowGrades = () => {
    this.setState({
      user: {fullname: 'Troy', username: 'ff', grades: [{class: 'Science', grade: 'A+'}]}
    })
  }
  
  handleRemoveGrades = () => {
    this.setState({
      user: {fullname: '', username: '', grades: []}
    })
  } 

  render() {

    return (

      <>
        <h1> {this.state.user.fullname} </h1>
        <div>
            {this.state.user.grades.map(grade => 
              <p key={grade.class}>{grade.class} : {grade.grade}</p>
            )}
        </div>
        <p>
        <button id="showgrades" onClick={this.handleShowGrades}>Grades</button></p>
        <p>
        <button id="removegrades" onClick={this.handleRemoveGrades}>Remove</button></p>
      </>
    );
  }
}

export default Student;