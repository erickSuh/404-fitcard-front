import React from 'react';

import { PanelContainer } from './styles';

import Params from './types';

const Panel: React.FC<Params> = ({ head, style, children, ...props }) => {
  return (
    <PanelContainer style={style} {...props}>
      {head && <h1>{head}</h1>}
      {children}
    </PanelContainer>
  );
};

export default Panel;
