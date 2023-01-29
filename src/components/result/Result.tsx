import React from 'react';

import { ResultContainer, ResultScreen } from './ResultStyles';

const Result = ({result }: { result: string }) => {
  return (
    <ResultContainer>
      <ResultScreen>
        {result}
      </ResultScreen>
    </ResultContainer>
  );
};

export default Result;