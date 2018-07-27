import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import MyChart from './chart';
import { Router, Route } from "react-router-dom";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">

          <Router history={history}>
          <div className="App vignets-new-page">


          <Route exact path='/' component={MyChart} />

      </div>
      </Router>
        </p>
      </div>
    );
  }
}

export default App;
