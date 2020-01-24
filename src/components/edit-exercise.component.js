import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);  
    
    this.state = {
       description: '',
       choice_a:"",
       choice_b:"",
       choice_c:"",
       choice_d:"",
       type: 0,
       correctChoice: 0,
       numberOfCorrect:0,
       numberOfWrong:0
    }
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeChoice_a = this.onChangeChoice_a.bind(this);
    this.onChangeChoice_b = this.onChangeChoice_b.bind(this);
    this.onChangeChoice_c = this.onChangeChoice_c.bind(this);
    this.onChangeChoice_d = this.onChangeChoice_d.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeCorrectChoice = this.onChangeCorrectChoice.bind(this);
    this.onChangeNumberOfCorrect = this.onChangeNumberOfCorrect.bind(this);
    this.onChangeNumberOfWrong = this.onChangeNumberOfWrong.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:5000/exercises/'+this.props.id)
    .then(response => {
      this.setState({
      description: response.data.description,
      choice_a:response.data.choice_a,
      choice_b:response.data.choice_b,
      choice_c:response.data.choice_c,
      choice_d:response.data.choice_d,
      type:response.data.type,
      tags:response.data.tags,
      correctChoice:response.data.correctChoice,
      numberOfCorrect:response.data.numberOfCorrect,
      numberOfWrong:response.data.numberOfWrong

      })   
    })
  .catch(function (error) {
    console.log(error);
  })

}

onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}
onChangeChoice_a(e) {
  this.setState({
    choice_a: e.target.value
  });
}
onChangeChoice_b(e) {
  this.setState({
    choice_b: e.target.value
  });
}
onChangeChoice_c(e) {
  this.setState({
    choice_c: e.target.value
  });
}
onChangeChoice_d(e) {
  this.setState({
    choice_d: e.target.value
  });
}
onChangeType(e) {
  this.setState({
    type: e.target.value
  });
}
onChangeTags(e) {
  this.setState({
    tags: e.target.value
  });
}

onChangeCorrectChoice(e) {
  this.setState({
     correctChoice: e.target.value
  });
}
onChangeNumberOfCorrect(e) {
  this.setState({
     numberOfCorrect: e.target.value
  });
}

onChangeNumberOfWrong(e) {
  this.setState({
     numberOfWrong: e.target.value
  });
}


  onSubmit_solution() {

    const exercise = {
       description: this.state.description,
       choice_a: this.state.choice_a,
       choice_b: this.state.choice_b,
       choice_c: this.state.choice_c,
       choice_d: this.state.choice_d,
       type: this.state.type,
       tags: this.state.tags,
       correctChoice: this.state.correctChoice,
       numberOfCorrect: this.state.numberOfCorrect+1,
       numberOfWrong: this.state.numberOfWrong,
     };
    axios.post('http://localhost:5000/exercises/update/'+this.props.id, exercise)
      .then(res => console.log(res.data));
    
    window.location = '/exercise_list';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise </h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>

          <div className="form-group"> 
            <label>Choice A: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.choice_a}
                onChange={this.onChangeChoice_a}
                />
          </div>

          <div className="form-group"> 
            <label>Choice B: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.choice_b}
                onChange={this.onChangeChoice_b}
                />
          </div>

          <div className="form-group"> 
            <label>Choice C: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.choice_c}
                onChange={this.onChangeChoice_c}
                />
          </div>

          <div className="form-group"> 
            <label>Choice D: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.choice_d}
                onChange={this.onChangeChoice_d}
                />
          </div>

          <div className="form-group"> 
            <label>Type </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}
                />
          </div>
          <div className="form-group"> 
            <label>Tags </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.tags}
                onChange={this.onChangeTags}
                />
          </div>
          <div className="form-group"> 
            <label>Correct Choice </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.correctChoice}
                onChange={this.onChangeCorrectChoice}
                />
          </div>

          

          <div className="form-group">
            <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}