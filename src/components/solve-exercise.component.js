import React, { Component } from 'react';
import axios from 'axios';

class Choices extends Component{
   constructor(props){
      super(props);  
      this.state = {
         description:"",
         choice_a:"",
         choice_b:"",
         choice_c:"",
         choice_d:"",
         type:0,
         tags:[],
         correctChoice:0,
         numberOfCorrect:0,
         numberOfWrong:0,
         appear_a:false,
         appear_b:false,
         appear_c:false,
         appear_d:false

      }
      this.onSubmit_solution = this.onSubmit_solution.bind(this);
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
         numberOfWrong:response.data.numberOfWrong,
         appear_a: response.data.choice_a.length>0,
         appear_b: response.data.choice_b.length>0,
         appear_c: response.data.choice_c.length>0,
         appear_d: response.data.choice_d.length>0

        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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
      <h3>{this.props.exercise.description} </h3>
      {this.state.appear_a &&<div><button type="button"  onClick={this.onSubmit_solution} class="btn btn-primary btn-lg" style={{margin: "auto 0",width:"50%","margin-top":"20px"}}>{this.props.exercise.choice_a}
        </button><br/> </div>

      }
       {this.state.appear_b && <div><button type="button" onClick={this.onSubmit_solution} class="btn btn-primary btn-lg" style={{margin: "auto 0",width:"50%","margin-top":"20px"}}>{this.props.exercise.choice_b}
        </button><br/> </div>
      }
       {this.state.appear_c &&<div><button type="button"  onClick={this.onSubmit_solution} class="btn btn-primary btn-lg" style={{margin: "auto 0",width:"50%","margin-top":"20px"}}>{this.props.exercise.choice_c}
        </button><br/> </div>

      }
       {this.state.appear_d && <div><button type="button" onClick={this.onSubmit_solution} class="btn btn-primary btn-lg" style={{margin: "auto 0",width:"50%","margin-top":"20px"}}>{this.props.exercise.choice_d}
        </button><br/> </div>

      }
      

   </div>
      );
   }
}
 
export default class SolveExercise extends Component {
   constructor(props){
      super(props);  
      this.state = {
         exercise: {},
         description: '',
         choices:[],
         choice1:"",
         choice2:"",
         choice3:"",
         choice4:""
      }
      this.choicesList = this.choicesList.bind(this);  
   }
   
    
  
   choicesList() {
      return <Choices exercise={this.state.exercise}  id={this.props.match.params.id}/>;
   }
   componentDidMount() {
      axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
       .then(response => {
         this.setState({ exercise: response.data});
       })
       .catch((error) => {
          console.log(error);
       })
    }
   render() {
      return (
      <div class="card bg-light mb-3 text-center" style={{"max-width": "100%"}}>
         <div class="card-header">Exercise</div>
            <div class="card-body">
               <h3 class="card-title">Answer the following question</h3>

               { this.choicesList() }
            </div>
      </div>

      )
   }
 }


