import React from "react";

import { HeaderContainer, HeaderTitle, HeaderToggleWrapper, HeaderToggleRadio, HeaderToggleInput, HeaderToggleLabel, HeaderToggleSlider, HeaderToggle, HeaderToggleTheme, HeaderToggleThemeWrapper, HeaderThemeText } from "./HeaderStyles";

const Header = ({ changeTheme, theme }: { changeTheme: (value: string) => void, theme: string }) => {
  return (
    <HeaderContainer>
      <HeaderTitle currentTheme={theme}>calc</HeaderTitle>

      <HeaderThemeText currentTheme={theme}>Theme</HeaderThemeText>
      <HeaderToggle>
        <HeaderToggleThemeWrapper>
        <HeaderToggleTheme currentTheme={theme} onClick={() => changeTheme('first')}>1</HeaderToggleTheme>
        <HeaderToggleTheme currentTheme={theme} onClick={() => changeTheme('second')}>2</HeaderToggleTheme>
        <HeaderToggleTheme currentTheme={theme} onClick={() => changeTheme('third')}>3</HeaderToggleTheme>
        </HeaderToggleThemeWrapper>

        <HeaderToggleWrapper>
          <HeaderToggleRadio>
            <HeaderToggleInput type="radio" name="theme" id="first" checked={theme === 'first'} />
            <HeaderToggleInput type="radio" name="theme" id="second" checked={theme === 'second'} />
            <HeaderToggleInput type="radio" name="theme" id="third" checked={theme === 'third'} />
            
            <HeaderToggleLabel htmlFor="first" onClick={() => changeTheme('first')} />
            <HeaderToggleLabel htmlFor="second" onClick={() => changeTheme('second')} />
            <HeaderToggleLabel htmlFor="third" onClick={() => changeTheme('third')} />
            <HeaderToggleSlider />
          </HeaderToggleRadio>
        </HeaderToggleWrapper>
      </HeaderToggle>
    </HeaderContainer>
  )
};

export default Header;