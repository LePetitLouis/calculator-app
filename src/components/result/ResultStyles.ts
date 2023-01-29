import styled from 'styled-components';

export const ResultContainer = styled.section`
  background-color: ${({ theme }) => theme.screenBg};
  max-width: 600px;
  width: 100%;
  height: 10rem;
  border-radius: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
`;

export const ResultScreen = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.colorTextRevert};
`;