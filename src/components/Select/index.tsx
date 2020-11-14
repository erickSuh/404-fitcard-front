import React, { useCallback } from 'react';
import Params from './types';

import { Container } from './styles';

const Select: React.FC<Params> = ({ value, list = [], children, onChange, style }) => {
  const renderList = useCallback(() => {
    if (list) {
      return list.map((item) => (
        <option key={item.key} value={item.value}>
          {item.label}
        </option>
      ));
    }
    return null;
  }, [list]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Container style={style}>
      <select placeholder="teste" value={value} onChange={handleChange}>
        {renderList()}
        {children}
      </select>
    </Container>
  );
};

export default Select;
