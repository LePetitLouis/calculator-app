import React from 'react';

import { KeyboardContainer, KeyboardKey } from './KeyboardStyles';

const Keyboard = () => {
  return (
    <KeyboardContainer>
      <KeyboardKey typeBtn='default'>7</KeyboardKey>
      <KeyboardKey typeBtn='default'>8</KeyboardKey>
      <KeyboardKey typeBtn='default'>9</KeyboardKey>
      <KeyboardKey typeBtn='reset'>DEL</KeyboardKey>
      <KeyboardKey typeBtn='default'>4</KeyboardKey>
      <KeyboardKey typeBtn='default'>5</KeyboardKey>
      <KeyboardKey typeBtn='default'>6</KeyboardKey>
      <KeyboardKey typeBtn='default'>+</KeyboardKey>
      <KeyboardKey typeBtn='default'>1</KeyboardKey>
      <KeyboardKey typeBtn='default'>2</KeyboardKey>
      <KeyboardKey typeBtn='default'>3</KeyboardKey>
      <KeyboardKey typeBtn='default'>-</KeyboardKey>
      <KeyboardKey typeBtn='default'>.</KeyboardKey>
      <KeyboardKey typeBtn='default'>0</KeyboardKey>
      <KeyboardKey typeBtn='default'>/</KeyboardKey>
      <KeyboardKey typeBtn='default'>x</KeyboardKey>
      <KeyboardKey typeBtn='reset'>RESET</KeyboardKey>
      <KeyboardKey typeBtn='result'>=</KeyboardKey>
    </KeyboardContainer>
  )
};

export default Keyboard;