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
    outline: none;

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

const KeypadPanel = ({ onClick }) => {
  return (
    <Keypad>
      <button name='C' className='basic-row' onClick={e => onClick(e.target.name)}>C</button>
      <button name='(' className='basic-row' onClick={e => onClick(e.target.name)}>(</button>
      <button name=')' className='basic-row' onClick={e => onClick(e.target.name)}>)</button>
      <button name='/' className='symbol' onClick={e => onClick(e.target.name)}>÷</button>

      <button name='1' className='number' onClick={e => onClick(e.target.name)}>1</button>
      <button name='2' className='number' onClick={e => onClick(e.target.name)}>2</button>
      <button name='3' className='number' onClick={e => onClick(e.target.name)}>3</button>
      <button name='*' className='symbol' onClick={e => onClick(e.target.name)}>x</button>

      <button name='4' className='number' onClick={e => onClick(e.target.name)}>4</button>
      <button name='5' className='number' onClick={e => onClick(e.target.name)}>5</button>
      <button name='6' className='number' onClick={e => onClick(e.target.name)}>6</button>
      <button name='-' className='symbol' onClick={e => onClick(e.target.name)}>-</button>

      <button name='7' className='number' onClick={e => onClick(e.target.name)}>7</button>
      <button name='8' className='number' onClick={e => onClick(e.target.name)}>8</button>
      <button name='9' className='number' onClick={e => onClick(e.target.name)}>9</button>
      <button name='+' className='symbol' onClick={e => onClick(e.target.name)}>+</button>

      <button name='.' className='number' onClick={e => onClick(e.target.name)}>.</button>
      <button name='0' className='number' onClick={e => onClick(e.target.name)}>0</button>
      <button name='CE' className='number' onClick={e => onClick(e.target.name)}>⬅︎</button>
      <button name='=' className='symbol' onClick={e => onClick(e.target.name)}>=</button>
    </Keypad>
  );
}

export default KeypadPanel; 