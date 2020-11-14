import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Adds from './components/Adds';


class App extends React.Component{
  render(){
    return(
      <div> 
        <Nav/>
        <Adds/>
    </div>
    
    )
  }
}

export default App;
