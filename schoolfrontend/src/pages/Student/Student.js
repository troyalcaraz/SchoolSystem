import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';


class Student extends Component {
  constructor(props){
    super(props);
    this.handleShowGrades = this.handleShowGrades.bind(this);
    this.handleRemoveGrades = this.handleRemoveGrades.bind(this);
  }
  
  handleShowGrades = () => {
    
  }
  
  handleRemoveGrades = () => {
    
  } 

  render() {
    console.log(this.props)
    if (this.props.grades) {
      return (
        <>
          <h1> {this.props.fullname} </h1>
          <div>
              {this.props.grades.map(grade => 
                <p key={grade.class}>{grade.class} : {grade.grade}</p>
              )}
          </div>
          <p>
          <input type="text" ref={this.user_ref} name="username"/></p>
          <p>
          <button id="showgrades" onClick={this.handleShowGrades}>Grades</button></p>
          <p>
          <button id="removegrades" onClick={this.handleRemoveGrades}>Remove</button></p>
        </>
      );
    }
    else {
      return (
        <h1>Sorry No one is logged in</h1>
      )
    }
  }
}

function mapStateToProps(state) {
  const {user, username} = state;
  return {user: user,
          username: username}
}

export default connect(mapStateToProps)(Student);