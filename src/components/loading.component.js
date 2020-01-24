import LoadingScreen from 'react-loading-screen';
import React, { Component } from 'react';

export default class Loading extends Component {

   componentDidMount() {
      setTimeout("window.location = '/home'",2500);

   }
   render() {
     return <LoadingScreen
     loading={true}
     bgColor='#DCDCDC'
     spinnerColor='#e6addd'
     textColor='#676767'
   > 
   </LoadingScreen>;
   }
 }

