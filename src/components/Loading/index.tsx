import React from 'react';

import Params from './types';
import { Container, Spinner } from './styles';

const Loading: React.FC<Params> = ({ isLoading, style, children }) => {
  return (
    <>
      {isLoading ? (
        <Container>
          <Spinner style={style} />
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
