import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  height: 2vh;
`
const Display = styled.div`
  height: 20vh;
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