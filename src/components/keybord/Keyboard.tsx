import React from 'react';

import { KeyboardContainer, KeyboardKey } from './KeyboardStyles';

const Keyboard = ({ setOperation, setNumber, reset, result, operator }: { setOperation: (value: string) => void, setNumber: (number: string) => void, reset: () => void, result: () => void, operator: string }) => {
  return (
    <KeyboardContainer>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('7')}>7</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('8')}>8</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('9')}>9</KeyboardKey>
      <KeyboardKey typeBtn='reset' onClick={() => setOperation('Backspace')}>DEL</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('4')}>4</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('5')}>5</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('6')}>6</KeyboardKey>
      <KeyboardKey typeBtn='default' className={ operator === '+' ? 'active' : ''} onClick={() => setOperation('+')}>+</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('1')}>1</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('2')}>2</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('3')}>3</KeyboardKey>
      <KeyboardKey typeBtn='default' className={ operator === '-' ? 'active' : ''} onClick={() => setOperation('-')}>-</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('.')}>.</KeyboardKey>
      <KeyboardKey typeBtn='default' onClick={() => setNumber('0')}>0</KeyboardKey>
      <KeyboardKey typeBtn='default' className={ operator === '/' ? 'active' : ''} onClick={() => setOperation('/')}>/</KeyboardKey>
      <KeyboardKey typeBtn='default' className={ operator === '*' ? 'active' : ''} onClick={() => setOperation('*')}>x</KeyboardKey>
      <KeyboardKey typeBtn='reset' onClick={reset}>RESET</KeyboardKey>
      <KeyboardKey typeBtn='result' onClick={result}>=</KeyboardKey>
    </KeyboardContainer>
  )
};

export default Keyboard;