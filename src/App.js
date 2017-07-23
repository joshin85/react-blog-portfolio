import React, { Component } from 'react';

// using ES6 modules
import { Router, Route, IndexRoute, Switch  } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';
import background from './images/background.jpg';
import './App.css';
import './styles/css/font-awesome-core.css';
import './styles/css/font-awesome-solid.css';

import Nav from './components/nav';
import Home from './components/home';
import Search from './components/search';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">        
        <Nav/>
        <div className="container-fluid">
          <Switch>
            <div className="box-container">
              <Route path="/" component={Home}/>
              <Route path="/search" component={Search}/>
            </div>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
