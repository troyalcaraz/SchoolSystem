import React, { Component } from "react";
import axios from 'axios';


class Student extends Component {
  constructor(props){
    super(props);
    this.user_ref = React.createRef()
  }

  state = {
    user: {fullname: '', username: '', grades: []}
    
  };
  
  handleShowGrades = () => {
    const user = {"username": this.user_ref.current.value}

    axios.post('http://localhost:5000/users', user).then(res => 
      {
        console.log(res.data)
        this.setState({
          user: res.data
        })
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
        <input type="text" ref={this.user_ref} name="username"/></p>
        <p>
        <button id="showgrades" onClick={this.handleShowGrades}>Grades</button></p>
        <p>
        <button id="removegrades" onClick={this.handleRemoveGrades}>Remove</button></p>
      </>
    );
  }
}

export default Student;