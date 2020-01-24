import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = props => (
  <tr>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.correctChoice}</td>
    <td>{props.exercise.numberOfCorrect}</td>
    <td>{props.exercise.numberOfWrong}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | 
      <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a> |
      <Link to={"/solve/"+props.exercise._id}>solve</Link> | 
     
    </td>
  </tr>
)
export default class ExercisesList extends Component {

  constructor(props) {
    super(props);  
    this.deleteExercise = this.deleteExercise.bind(this);  
    this.state = {exercises: []};

  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
     .then(response => {
       this.setState({ exercises: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => console.log(res.data));  this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  /*
   const description = req.body.description;
   const choices = Array(req.body.choices);
   const type = Number(req.body.type);
   const tags = Array(req.body.tags);
   const correctChoice = Number(req.body.correctChoice);
   const numberOfCorrect = Number(req.body.numberOfCorrect);
   const numberOfWrong = Number(req.body.numberOfWrong);

  */
  render() {
    return (
     <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Description</th>
            <th>Correct Choice</th>
            <th>Number of Correct Answers</th>
            <th>Number of Wrong Answers</th>
          </tr>
        </thead>
        <tbody>
        { this.exerciseList() }
        </tbody>
      </table>
    </div>
    )
  }
} 