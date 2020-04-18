import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Calculator from './components/Calculator'
// import Details from './Details'

const Container = styled.div`

`

class App extends Component {
  render() {
    return (
      <Container>
        <Calculator />
        {/* <Details /> */}
      </Container>
    );
  }
}

export default App;