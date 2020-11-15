import React from 'react';

import { Container } from './styles';
import Params from './types';

const Checkbox: React.FC<Params> = ({ id, checked, onChange, label, style }) => {
  return (
    <Container style={style}>
      <label htmlFor={id}>
        <input id={id} type="checkbox" onChange={onChange} checked={checked} />
        {label}
      </label>
    </Container>
  );
};

export default Checkbox;
