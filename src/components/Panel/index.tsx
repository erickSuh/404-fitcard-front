import React from 'react';

import { PanelContainer } from './styles';

import Params from './types';

const Panel: React.FC<Params> = ({ style, children, ...props }) => {
  return (
    <PanelContainer style={style} {...props}>
      {children}
    </PanelContainer>
  );
};

export default Panel;
