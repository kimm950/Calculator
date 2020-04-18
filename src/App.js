import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator'
import Details from './components/Details'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Calculator />
        <Details />
      </div>
    );
  }
}

export default App;