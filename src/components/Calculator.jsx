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

const AboutMeButton = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(51, 51, 51, 0.3) 0px 1px 6px 0px;
  background-color: #ffb514;
  color: #fff;
  font-weight: bold;
  transition: 1s;
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
`
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      isCalculatorOpen: true,
    }
  }

  handleClickKeypad = (key) => {
    if (key === '=') {
      this.getResult()
    } else if (key === 'C') {
      this.clear()
    } else if (key === 'CE') {
      this.backSpace()
    } else {
      this.setState({ result: this.state.result + key })
    }
  }

  getResult = () => {
    const { result } = this.state
    let validateResult = ''
    if (result.includes('--')) {
      validateResult = result.replace('--', '+')
    } else {
      validateResult = result
    } try {
      this.setState({ result: (eval(validateResult) || '') + '' })
    } catch (e) {
      this.setState({ result: 'Error!' })
    }
  }

  clear = () => {
    this.setState({ result: '' })
  }

  backSpace = () => {
    this.setState({ result: this.state.result.slice(0, -1) })
  }

  handleClose = (close, hide, wide) => {
    if (close) {
      this.setState({ isCalculatorOpen: !this.state.isCalculatorOpen })
    }
    if (hide) {
      this.setState({ isCalculatorOpen: !this.state.isCalculatorOpen })
    }
    if (wide) {
      this.setState({ isCalculatorOpen: !this.state.isCalculatorOpen })
    }
  }

  render() {
    const { result, isCalculatorOpen } = this.state
    return (
      <div>
        {!isCalculatorOpen ? (
          <AboutMeButton onClick={this.handleClose}>Toggle Calculator!</AboutMeButton>
        ) : (
            <Container>
              <DisplayPanel result={result} onClick={() => this.handleClose} />
              <KeypadPanel onClick={this.handleClickKeypad} />
            </Container >
          )
        }
      </div>
    );
  }
}

export default Calculator
