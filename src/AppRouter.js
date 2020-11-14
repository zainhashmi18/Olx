import React from 'react';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


class AppRouter extends React.Component{
  render(){
    return(
      <div> 
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/counter" component={Counter}/>
        </Router>
    </div>
    
    )
  }
}

export default AppRouter;
