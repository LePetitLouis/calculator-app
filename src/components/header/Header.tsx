import React from "react";

import { HeaderContainer, HeaderTitle, HeaderToggleWrapper, HeaderToggleRadio, HeaderToggleInput, HeaderToggleLabel, HeaderToggleSlider, HeaderToggle, HeaderToggleTheme, HeaderToggleThemeWrapper } from "./HeaderStyles";

const Header = ({ changeTheme, theme }: { changeTheme: (value: string) => void, theme: string }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>Calc</HeaderTitle>

      <HeaderToggle>
        <HeaderToggleThemeWrapper>
        <HeaderToggleTheme>1</HeaderToggleTheme>
        <HeaderToggleTheme>2</HeaderToggleTheme>
        <HeaderToggleTheme>3</HeaderToggleTheme>
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