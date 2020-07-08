import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import AddUser from './addUser.component';



class AdminMenu extends Component {

    menu = new AdminMenu();

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
            <center>
                <div id="title"><h1>School System - Admin</h1></div>
                <div id="content">
                <h1>Admin</h1>
                <button><Link to='/newuser'>Add User</Link></button>
                {/* <button id="adduserbtn" onClick={this.to_add_user}>Add User </button>
                <button id="to_main" onClick={this.to_main}>Log out </button>
                <button onClick={this.listStudents}>Assign Student To Teacher</button>
                <button id="deleteUser" onClick={this.remove}>Delete User </button> */}

                </div>
                <Route path='/newuser' component={AddUser}/>
                {/* <div id="students" style={this.state.studentStyle}>
                    <p  style={this.state.bold}>Students</p>
                    { this.state.students.map( student => <p onClick={this.student}>{student.username}</p>) }
                    <p id="student" style={this.state.bold}></p>
                </div>
                <div id="teachers" style={this.state.teacherStyle}>
                    <p  style={this.state.bold}>Teachers</p>
                    { this.state.teachers.map( teacher => <p onClick={this.teacher}>{teacher.username}</p>) }
                    <p id="teacher" style={this.state.bold}></p>
                <div id="users">
                    <p  style={this.state.bold}>Users</p>
                    { this.state.users.map(user =>
                    <>{user.fullname}<button onClick={this.remove}>Delete</button><br/></>)}
                    <p id="user" style={this.state.bold}></p>
                </div> */}



                {/* <button onClick={this.assign} style={this.state.assign}>Assign</button> */}
            </center>
            </Router>
            );
        }
    }

    function mapStateToProps(state) {
        // const { auction } = state;
        // return { auction: auction }
    }

    export default connect(mapStateToProps)(AdminMenu)

