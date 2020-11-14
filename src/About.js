import React from 'react';
import './App.css';
import Nav from './Nav';

class About extends React.Component{
    render(){
      return(
        <div className="container"> 
        <Nav/>
        <h1>About Us</h1>
        </div>
      )
    }
  }
  
  export default About;