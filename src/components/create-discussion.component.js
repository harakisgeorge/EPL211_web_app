import React, { Component } from 'react';

export default class CreateDiscussion extends Component {


   constructor(props) {
      super(props);  
  
      this.state = {
         title: "",
         username: "",
         description: 0
      }
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
    onChangeDescription(e) {
      this.setState({
        description: e.target.value
      });
    }
    


    onSubmit(e) {
      e.preventDefault();  
      const discussion = {
       title: this.state.title,
        username: this.state.username,
        description: this.state.description

      };
      console.log(discussion);
      window.location = '/loading';
    }

    componentDidMount() {
      
    }
 
  render() {
    return (
      <div>
      <h3>Create New Discussion </h3>
      <form onSubmit={this.onSubmit}  style={{margin: "0 auto"}} class="container col-md-12 col-md-offset-4">

        <div class="form-group">
          <label>Title</label>

            <input type="text" value={this.state.title}
            onChange={this.onChangeTitle} class="form-control"/>
        </div>

        <div class="form-group">
          <label>Description</label>     
            <input type="text" value={this.state.description}
            onChange={this.onChangeDescription} class="form-control"/>
        </div>


        <div className="form-group">
            <input type="submit" value="Create Discussion Log" className="btn btn-primary" />
          </div>
      </form>
    </div>
  )
}
}