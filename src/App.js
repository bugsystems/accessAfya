import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

//Import the metrics component

import Metrics from './components/Metrics';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Metrics />
        </div>
      </Router>
    );
  }
}

export default App;
