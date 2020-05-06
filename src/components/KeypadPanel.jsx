import React from 'react'
import styled from 'styled-components'

const Keypad = styled.div`
  button {
    width: 75px;
    height: 75px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    transition: .5s;
    &:hover {
      /* box-shadow: inset 0 0 5px 4px #e6e6e6; */
      cursor: pointer;
    }
  }
  .basic-row {
    background-color: #e6e6e6;
  }
  .number {
    background-color: #ffff;
    &:nth-child(17) {
     border-radius: 0 0 0 5px;
    }
  }
  .symbol {
    background-color: #03ad7d;
    color: #e6e6e6;
    &:nth-child(20) {
    border-radius: 0 0 5px 0;
    }
  }
`
//#03ad7d
//#049066
//#e6e6e6 
const KeypadPanel = ({ onClick }) => {
  return (
    <Keypad>
      <button className='basic-row' onClick={e => onClick(e.target.name)}>C</button>
      <button className='basic-row' onClick={e => onClick(e.target.name)}>(</button>
      <button className='basic-row' onClick={e => onClick(e.target.name)}>)</button>
      <button className='symbol' onClick={e => onClick(e.target.name)}>%</button>

      <button className='number' onClick={e => onClick(e.target.name)}>1</button>
      <button className='number' onClick={e => onClick(e.target.name)}>2</button>
      <button className='number' onClick={e => onClick(e.target.name)}>3</button>
      <button className='symbol' onClick={e => onClick(e.target.name)}>x</button>

      <button className='number' onClick={e => onClick(e.target.name)}>4</button>
      <button className='number' onClick={e => onClick(e.target.name)}>5</button>
      <button className='number' onClick={e => onClick(e.target.name)}>6</button>
      <button className='symbol' onClick={e => onClick(e.target.name)}>-</button>

      <button className='number' onClick={e => onClick(e.target.name)}>7</button>
      <button className='number' onClick={e => onClick(e.target.name)}>8</button>
      <button className='number' onClick={e => onClick(e.target.name)}>9</button>
      <button className='symbol' onClick={e => onClick(e.target.name)}>+</button>

      <button className='number' onClick={e => onClick(e.target.name)}>.</button>
      <button className='number' onClick={e => onClick(e.target.name)}>0</button>
      <button className='number' onClick={e => onClick(e.target.name)}>⬅︎</button>
      <button className='symbol' onClick={e => onClick(e.target.name)}>=</button>
    </Keypad>
  );
}

export default KeypadPanel; 