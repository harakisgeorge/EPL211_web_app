import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      
        <div style={{"font-size":"20px"}} class="container-fluid">

          <div class="navbar-header">
          <Link to="/home" className="navbar-brand">Home</Link>
          </div>
            <li style={{"list-style-type": "none"}} class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Exercises
              <span class="caret"></span></a>
              <ul class="dropdown-menu">
              <Link to="/create" className="nav-link">Create Exercise </Link>
              <Link to="/exercise_list" className="nav-link">Exercise List</Link>
              </ul>
            </li>
            <li style={{"list-style-type": "none"}} class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Practise
              <span class="caret"></span></a>
              <ul class="dropdown-menu">
              <Link to="/" className="nav-link">In-class</Link>
              <Link to="/" className="nav-link">Extra material</Link>
              </ul>
            </li>
            <li style={{"list-style-type": "none"}} class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">User
              <span class="caret"></span></a>
              <ul class="dropdown-menu">
              <Link to="/user" className="nav-link">Create User</Link>
              <Link to="/login" className="nav-link">Login</Link>
              </ul>
            </li>
            <li style={{"list-style-type": "none"}} class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Discussion
              <span class="caret"></span></a>
              <ul class="dropdown-menu">
              <Link to="/discussion" className="nav-link">Create Discussion</Link>
              <Link to="/" className="nav-link">List of Discussions</Link>
              </ul>
            </li>
        </div>
      </nav>
      
    );
  }
}