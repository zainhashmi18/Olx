import React from 'react';
import './App.css';
import Nav from './Nav';

class Home extends React.Component{
    render(){
      return(
        <div className="container"> 
        <Nav/>
        <h1>Home</h1>
        </div>
      )
    }
  }
  
  export default Home;