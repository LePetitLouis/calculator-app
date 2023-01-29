import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
:root {
/* Primary */
  --font-size: 32px;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: var(--font-size-body);
  background-color:${({ theme }) => theme.mainBg};
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  min-height: 100vh;
  color: ${({ theme }) => theme.colorText};;
 
}

main{
  position: relative;
  min-height: inherit;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  overflow:hidden;
}
`;

export default GlobalStyles;