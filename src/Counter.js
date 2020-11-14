import React from 'react';
import './App.css';
import Nav from './Nav';

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
        this.setState((state)=>({
            count: state.count + 5
        }))
    }
    decrementCount=()=>{
        this.setState((state)=>({
            count: state.count - 5
        }))
    }
    render(){
      return(
        <div className="container"> 
        <Nav/>
        <div className="counter">
        <h1 >Welcome</h1>
      <h3 className="mt-5">{this.state.count}</h3>
        <button onClick={this.incrementCount} className="mt-5 mb-2">Increment</button>
        <button onClick={this.decrementCount} className="mt-5 mb-2">Decrement</button>
        </div>
        </div>
      )
    }
  }
  
  export default Counter;