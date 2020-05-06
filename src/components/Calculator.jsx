import React, { Component } from 'react'
import styled from 'styled-components'
import DisplayPanel from './DisplayPanel'
import KeypadPanel from './KeypadPanel'

const Container = styled.div`
  width: 300px;
  height: 600px;
  background-color: #fff;
  box-shadow: rgba(51, 51, 51, 0.3) 0px 1px 6px 0px;
  border-radius: 5px;
`

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
  }

  render() {
    const { result } = this.state
    return (
      <Container>
        <DisplayPanel result={result} />
        <KeypadPanel />
      </Container>
    );
  }
}

export default Calculator
