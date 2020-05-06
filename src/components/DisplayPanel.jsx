import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  height: 2vh;
  display: flex;
  align-items: center;
  div {
    height: 10px;
    width:10px;
    border-radius: 50%;
    margin: 0 3px; 
    &:nth-child(1){
      background-color: #fa352a;
    }
    &:nth-child(2){
      background-color: #ffb514;
    }
    &:nth-child(3){
      background-color: #51c22c;
    }
    &:hover {
      cursor: pointer;
    }
  }
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

const DisplayPanel = ({ result, onClick, close, hide, wide }) => {
  return (
    <div>
      <Header>
        <div onClick={onClick(close)} />
        <div onClick={onClick(hide)} />
        <div onClick={onClick(wide)} />
      </Header>
      <Display>
        {result}
      </Display>
    </div>
  );
}

export default DisplayPanel;