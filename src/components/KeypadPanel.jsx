import React from 'react'
import styled from 'styled-components'

const Keypad = styled.div`
  padding: 10px;
  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 5px;
  }
`

const KeypadPanel = ({ onClick }) => {
  return (
    <Keypad>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>

      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>

      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>

      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>

      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
      <button onClick={e => onClick(e.target.name)}>C</button>
    </Keypad>
  );
}

export default KeypadPanel; 