import React, { Component } from 'react'
import DisplayPanel from './DisplayPanel'
import KeypadPanel from './KeypadPanel'

class Calculator extends Component {
  render() {
    return (
      <div>
        <DisplayPanel />
        <KeypadPanel />
      </div>
    );
  }
}

export default Calculator