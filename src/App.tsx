import React, { useEffect, useState } from 'react';
import logo from './logo.svg';

import { ThemeProvider } from 'styled-components'
import { firstTheme, secondTheme, thirdTheme } from './styles/themes/theme';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/header/Header';
import Result from './components/result/Result';
import Keyboard from './components/keybord/Keyboard';

function App() {
  const [theme, setTheme] = useState<string>('first');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'first';
    setTheme(savedTheme);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === 'first' ? firstTheme : theme === 'second' ? secondTheme : thirdTheme}>
        <GlobalStyles />
        
        <Header changeTheme={setTheme} theme={theme} />
        <Result result="0" />
        <Keyboard />
      </ThemeProvider>
    </>
  );
}

export default App;

