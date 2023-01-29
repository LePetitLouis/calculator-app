import styled from 'styled-components';

type props = {
  typeBtn: string;
};

export const KeyboardContainer = styled.section`
  background-color: ${({ theme }) => theme.toggleBg};
  padding: 2rem;
  border-radius: 1rem;
  max-width: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const KeyboardKey = styled.button<props>`
  font-family: 'League Spartan', sans-serif;
  background-color: ${({ theme, typeBtn }) => typeBtn === 'default' ? theme.keyNumberBg : typeBtn === 'reset' ? theme.keyOperationBg : theme.keyResultBg};
  border: none;
  border-radius: 1rem;
  height: 70px;
  box-shadow: 0 6px 0 0 ${({ theme, typeBtn }) => typeBtn === 'default' ? theme.keyNumberShadow : typeBtn === 'reset' ? theme.keyOperationShadow : theme.keyResultShadow};
  color: ${({ theme, typeBtn }) => typeBtn === 'default' ? theme.colorTextSecondary : theme.colorText};
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  &:nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  &:nth-child(4) {
    font-size: 28px;
    grid-area: 1 / 4 / 2 / 5;
  }
  &:nth-child(5) {
    grid-area: 2 / 1 / 3 / 2;
  }
  &:nth-child(6) {
    grid-area: 2 / 2 / 3 / 3;
  }
  &:nth-child(7) {
    grid-area: 2 / 3 / 3 / 4;
  }
  &:nth-child(8) {
    grid-area: 2 / 4 / 3 / 5;
  }
  &:nth-child(9) {
    grid-area: 3 / 1 / 4 / 2;
  }
  &:nth-child(10) {
    grid-area: 3 / 2 / 4 / 3;
  }
  &:nth-child(11) {
    grid-area: 3 / 3 / 4 / 4;
  }
  &:nth-child(12) {
    grid-area: 3 / 4 / 4 / 5;
  }
  &:nth-child(13) {
    grid-area: 4 / 1 / 5 / 2;
  }
  &:nth-child(14) {
    grid-area: 4 / 2 / 5 / 3;
  }
  &:nth-child(15) {
    grid-area: 4 / 3 / 5 / 4;
  }
  &:nth-child(16) {
    grid-area: 4 / 4 / 5 / 5;
  }
  &:nth-child(17) {
    font-size: 28px;
    grid-area: 5 / 1 / 6 / 3;
  }
  &:nth-child(18) {
    grid-area: 5 / 3 / 6 / 5;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 524px) {
    box-shadow: 0 3px 0 0 ${({ theme, typeBtn }) => typeBtn === 'default' ? theme.keyNumberShadow : typeBtn === 'reset' ? theme.keyOperationShadow : theme.keyResultShadow};
    &:nth-child(4), &:nth-child(17) {
      font-size: 20px;
    }
  }
`;