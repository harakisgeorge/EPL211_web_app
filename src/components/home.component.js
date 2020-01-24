import React, { Component } from 'react';

export default class Home extends Component {

   render() {
      return <div class="card text-center">
      <div class="card-header">
        EPL 211 - Web Application
      </div>
      <div class="card-body">
        <h5 class="card-title">Practise EPL 211 in and out of the lectures</h5>
        <p class="card-text">Study the material at this<a href="https://www.cs.ucy.ac.cy/~annap/epl211/">  link  </a></p>
        <a href="/exercise_list" class="btn btn-primary">Click for in-class questions</a>
      </div>
      <div class="card-footer text-muted">
      </div>
    </div>;
   }
 }

