import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components'
import { firstTheme, secondTheme, thirdTheme } from './styles/themes/theme';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/header/Header';
import Result from './components/result/Result';
import Keyboard from './components/keybord/Keyboard';

function App() {
  const [theme, setTheme] = useState<string>('first');

  const [result, setResult] = useState<string>('0');
  const [lastNumber, setLastNumber] = useState<string>('');
  const [operation, setOperation] = useState<string>('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'first';
    setTheme(savedTheme);
  }, []);

  const handleSetNumber = (number: string) => {
    if (operation !== '') {
      setLastNumber(lastNumber + number);
      return
    } else if (result === '0') {
      setResult(number);
      return
    }
    setResult(result + number);
  }

  const handleSetOperation = async (operation: string) => {
    if (operation === 'DEL' && lastNumber !== '') {
      setLastNumber(lastNumber.slice(0, -1));
      lastNumber.length === 1 && setLastNumber('0');
    } else if (operation === 'DEL' && result !== '0') {
      setResult(result.slice(0, -1));
      result.length === 1 && setResult('0');
    } else if (operation !== '' && lastNumber === '') setOperation(operation);
    else if (operation !== '' && lastNumber !== '') {
      await handleResult();
      setOperation(operation);
    }
  }

  const handleResult = async () => {
    switch (operation) {
      case '+':
        setResult(String(Number(result) + Number(lastNumber)));
        break;
      case '-':
        setResult(String(Number(result) - Number(lastNumber)));
        break;
      case '/':
        setResult(String(Number(result) / Number(lastNumber)));
        break;
      case '*':
        setResult(String(Number(result) * Number(lastNumber)));
        break;
      default:
        break;
    }
    setLastNumber('');
    setOperation('');
  }


  const handleReset = () => {
    setResult('0');
    setOperation('');
    setLastNumber('');
  }

  return (
    <>
      <ThemeProvider theme={theme === 'first' ? firstTheme : theme === 'second' ? secondTheme : thirdTheme}>
        <GlobalStyles />
        
        <Header changeTheme={setTheme} theme={theme} />
        <Result result={ lastNumber ? lastNumber : result} />
        <Keyboard 
          setOperation={(operation: string) => handleSetOperation(operation)}   
          setNumber={(number: string) => handleSetNumber(number)}
          result={() => handleResult()}
          reset={() => handleReset()}
        />
      </ThemeProvider>
    </>
  );
}

export default App;

