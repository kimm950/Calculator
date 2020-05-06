import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  margin: 20px;
  background-color: #475862;
  box-shadow: rgba(51, 51, 51, 0.3) 0px 1px 6px 0px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  .detail-card {
    padding: 0 10px 10px 10px;
    a:link, a:visited {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }
`

class Details extends Component {
  render() {
    return (
      <Container>
        <div className='detail-card'>
          <p>React Calculator</p>
          <p>Kimm950</p>
          <a href='https://github.com/kimm950'>Visit my Github!</a>
        </div>
      </Container>
    );
  }
}

export default Details