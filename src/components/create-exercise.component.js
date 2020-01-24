import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {


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
      this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
      e.preventDefault();  
      const exercise = {
        description: this.state.description,
        choice_a: this.state.choice_a,
        choice_b: this.state.choice_b,
        choice_c: this.state.choice_c,
        choice_d: this.state.choice_d,
        type: this.state.type,
        tags: this.state.tags,
        correctChoice: this.state.correctChoice,
        numberOfCorrect: 0,
        numberOfWrong: 0,

      };
      console.log(exercise);
      axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
      window.location = '/loading';
    }

    componentDidMount() {
      
    }
    /*
    description:{type:String,required:true},
   choices: [],
   type:{type: Number, required:true},
   tags:[],
   correctChoice:{type: Number, required:true},
   numberOfCorrect:Number,
   numberOfWrong:Number */
  render() {
    return (
      <div>
        
      <h3>Create New Exercise</h3>
      <form onSubmit={this.onSubmit}  
      style={{margin: "0 auto"}} 
      class="container col-md-12 col-md-offset-4">
        <div className="form-group"> 

          <label>Description</label>

            <input type="text" value={this.state.description}
            onChange={this.onChangeDescription} required class="form-control"/>
          </div>

          <div className="form-group"> 

          <label>Choice A</label>
            <input type="text" value={this.state.choice_a}
            onChange={this.onChangeChoice_a} required class="form-control"/>
          </div>

          <div className="form-group">
          <label>Choice B</label>
            <input type="text" value={this.state.choice_b}
            onChange={this.onChangeChoice_b} required class="form-control"/>
          </div>

          <div className="form-group"> 
          <label>Choice C</label>
            <input type="text" value={this.state.choice_c}
            onChange={this.onChangeChoice_c}  class="form-control"/>
          </div>

          <div className="form-group"> 
          <label>Choice D</label>
            <input type="text" value={this.state.choice_d}
            onChange={this.onChangeChoice_d}  class="form-control"/>
          </div>

          <div className="form-group"> 
          <label>Type</label>
            <input type="text" value={this.state.type}
            onChange={this.onChangeType} required class="form-control"/>
          </div>

          <div className="form-group"> 

          <label>Tags</label>
            <input type="text" value={this.state.tags}
            onChange={this.onChangeTags} required class="form-control"/>
          </div>

          <div className="form-group"> 

          <label>Correct Choice</label>
            <input type="text" value={this.state.correctChoice}
            onChange={this.onChangeCorrectChoice} required class="form-control"/>
          </div>



        <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
      </form>
    </div>
  )
}
}