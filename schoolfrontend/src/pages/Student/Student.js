import React, { Component } from "react";
import axios from 'axios';
//import Home from '../Home/Home';


class Student extends Component {
  constructor(props){
    super(props);
    this.URI = 'http://localhost:5000/student';
    this.state = {user: null};
  }

  state = {

    user: {username: '', grades: []}
    
  };

  showGrades = () => {
    console.log(this.state)
    /*this.setState({user: {username: 'Troy',
                          grades: [{class: 'Science', grade: 'A'},
                                   {class: 'PE', grade: 'B'},
                                   {class: 'History', grade: 'C'},
                                   {class: 'English', grade: 'D'},
                                   {class: 'Art', grade: 'F'}
                                  ]
                         }
                  })*/
    console.log(this.state)

    /*axios.post(this.URI).then(res => {
      console.log(res.data.role);
    })*/

    console.log(this.state.username, this.state.grades)

    return (
      <>
        <h1> {this.state.username} </h1>
        <div>
          {this.state.grades.map((grade) => 
            <p>{grade.class} : {grade.grade}</p>
          )}
        </div>
      </>
    )
  }

  render() {

    return (

      <>
        <button id="gradebutton" onClick={this.setState({user: {username: 'blah', grades: []}})}>Grades</button>
      </>
     
    );
  }
}

export default Student;