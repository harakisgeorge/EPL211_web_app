import React, { Component } from 'react';
import axios from 'axios';

export default class LoginUser extends Component {


   constructor(props) {
      super(props);  
      
      this.state = {
         username: "",
         password: "",
         temp_username:"",
         temp_password:"",
         usersCollection: []
      }
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
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

   onSubmit(e){
     e.preventDefault();
    axios.get('http://localhost:5000/users/')
    .then(response => {
      this.setState({
        temp_username:response.data.username,
        temp_password:response.data.password
      })   
    })
    .catch(function (error) {
      console.log(error);
    })

    if(this.state.username === this.state.temp_username && this.state.temp_password === this.state.password){
      alert("Input user"+this.state.username + " DATABASE user "+ this.state.temp_username + "Input user"+this.state.password + " DATABASE user "+ this.state.temp_password );
      window.location = '/loading';

    }
  }
    componentDidMount() {
      axios.get('http://localhost:5000/users')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
            alert(this.state.usersCollection);
    }
 
  render() {
    return (
      <div>
      <h3>Login </h3>
      <form onSubmit={this.onSubmit}  style={{margin: "0 auto"}} class="container col-md-4 col-md-offset-4">

          <div class="form-group">         
             <label>Username
              <input type="text" value={this.state.username}
              onChange={this.onChangeUsername} class="form-control" />
            </label>
          </div>
        <div class="form-group">
            <label>Password
              <input type="password" value={this.state.password}
              onChange={this.onChangePassword} class="form-control"/>
            </label>    
        </div> 


        <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
      </form>
    </div>
  )
}
}