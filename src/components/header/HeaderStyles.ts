import styled from 'styled-components';

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colorTextRevert};
`;

export const HeaderToggle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const HeaderToggleThemeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderToggleTheme = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colorTextRevert};
`;

export const HeaderToggleWrapper = styled.div`
  margin: 0 0;
  grid-column: 3 / -1;
  grid-row: 2 / -1;
`;

export const HeaderToggleRadio = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.toggleBg};
  margin: 0 auto;
  overflow: hidden;
  padding: 0 0;
  border-radius: 50px;
  position: relative;
  height: 26px;
  width: 78px;

  * {
    float: left;
  }
`;

export const HeaderToggleSlider = styled.div`
  background-color: ${({ theme }) => theme.keyBgToggle};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 3px;
  border-radius: 50%;
  transition: all 0.4s ease;
`;

export const HeaderToggleLabel = styled.label`
  color: rgba(255, 255, 255, 0); /* alpha 0; invisible */
  z-index: 0;
  display: block;
  width: 20px;
  height: 20px;
  margin: 3px 3px;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;
  text-align: center;
`;

export const HeaderToggleInput = styled.input`
  display: none;
  position: relative;
  background-color: ${({ theme }) => theme.toggleBg};
  margin: 0 auto;
  overflow: hidden;
  padding: 0 0;
  border-radius: 50px;
  position: relative;
  height: 26px;
  width: 78px;

  :nth-child(1):checked ~ ${HeaderToggleSlider} {
    left: 3px;
  }

  :nth-child(2):checked ~ ${HeaderToggleSlider} {
    left: 29px;
  }

  :nth-child(3):checked ~ ${HeaderToggleSlider} {
    left: 55px;
  }
`;

export const HeaderThemeText = styled.p`
  font-size: 12px;
  flex: 1;
  text-align: end;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorTextRevert};
  margin-right: 3rem;
  margin-bottom: -25px;
`; 