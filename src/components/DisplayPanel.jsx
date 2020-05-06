import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  height: 2vh;
`
const Display = styled.div`
  padding: 10px;
  max-width: 300px;
  height: 20vh;
  word-wrap: break-word;
  color: #ffff;
  font-weight: bold;
  font-size: 32px;
  background-color: #475862;
`

const DisplayPanel = ({ result }) => {
  return (
    <div>
      <Header />
      <Display>
        {result}
      </Display>
    </div>
  );
}

export default DisplayPanel;