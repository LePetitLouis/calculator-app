import styled from 'styled-components';

type props = {
  currentTheme: string;
}

export const ResultContainer = styled.section`
  background-color: ${({ theme }) =>  theme.resultBg};
  max-width: 600px;
  width: 100%;
  height: 10rem;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
`;

export const ResultScreen = styled.p<props>`
  font-size: 32px;
  color: ${({ theme, currentTheme }) => currentTheme === 'first' ? theme.colorText : theme.colorTextSecondary};
`;