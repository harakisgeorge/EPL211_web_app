import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateDiscussion from "./components/create-discussion.component";
import Loading from "./components/loading.component";
import Home from "./components/home.component";
import SolveExercise from "./components/solve-exercise.component";
import Login from "./components/login-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/home" component={Home} />
      <Route path="/solve/:id"   component={SolveExercise} />
      <Route path="/exercise_list" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/login" component={Login} />
      <Route path="/loading" component={Loading} />
      <Route path="/discussion" component={CreateDiscussion} />
      </div>
    </Router>
  );
}

export default App;