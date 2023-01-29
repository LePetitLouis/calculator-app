import React from 'react';

import { ResultContainer, ResultScreen } from './ResultStyles';

const Result = ({result, theme }: { result: string, theme: string }) => {
  return (
    <ResultContainer>
      <ResultScreen currentTheme={theme}>
        {result}
      </ResultScreen>
    </ResultContainer>
  );
};

export default Result;