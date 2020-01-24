import React, { Component } from 'react';
import axios from 'axios';
export default class CreateUser extends Component {


   constructor(props) {
      super(props);  
      
      this.state = {
         username: "",
         password: "",
         priviledge: 0,
         favorite_exercises: []
      }
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangePriviledge = this.onChangePriviledge.bind(this);
      this.onChangeFavorite_Exercises = this.onChangeFavorite_Exercises.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
    onChangePriviledge(e) {
      this.setState({
        priviledge: e.target.value
      });
    }
    onChangeFavorite_Exercises(e) {
      this.setState({
        favorite_exercises: e.target.value
      });
    }


    onSubmit(e) {
      e.preventDefault();  
      const user = {
        username: this.state.username,
        password: this.state.password,
        priviledge: this.state.priviledge,
        favorite_exercises :[]

      };
      console.log(user);
      axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
      window.location = '/loading';
      
    }

    componentDidMount() {
      
    }
 
  render() {
    return (
      <div>
      <h3>Create New User </h3>
      <form onSubmit={this.onSubmit}  style={{margin: "0 auto"}} class="container col-md-4 col-md-offset-4">

          <div class="form-group">         
             <label>Username
              <input type="text" value={this.state.username}
              onChange={this.onChangeUsername} class="form-control" />
            </label>
          </div>
        <div class="form-group">
            <label>Password
              <input type="text" value={this.state.password}
              onChange={this.onChangePassword} class="form-control"/>
            </label>    
        </div> 

        <div class="form-group">      
          <label>Priviledge
            <input type="text" value={this.state.priviledge}
            onChange={this.onChangePriviledge} class="form-control" />
          </label>      
        </div>   



        <div className="form-group">
            <input type="submit" value="Create User Log" className="btn btn-primary" />
          </div>
      </form>
    </div>
  )
}
}