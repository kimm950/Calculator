import React, { Component } from 'react'
import styled from 'styled-components'
import DisplayPanel from './DisplayPanel'
import KeypadPanel from './KeypadPanel'

const Container = styled.div`
  width: 300px;
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

  handleClickKeypad = (key) => {
    if (key === '=') {
      this.getResult()
    } else if (key === 'C') {
      this.clear()

    }
  }

  getResult = () => {
    const { result } = this.state
    let validateResult = ''
    if (result.includes('--')) {
      validateResult = result.replace('--', '+')
    } else {
      validateResult = result
    }
  }

  clear = () => {
    this.setState({ result: '' })
  }

  render() {
    const { result } = this.state
    return (
      <Container>
        <DisplayPanel result={result} />
        <KeypadPanel onClick={this.handleClickKeypad} />
      </Container>
    );
  }
}

export default Calculator
