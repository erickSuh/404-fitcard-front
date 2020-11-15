import React from 'react';

import Params from './types';
import { InputContainer } from './styles';

const Input: React.FC<Params> = ({
  id,
  name,
  type,
  value,
  placeholder,
  label,
  onChange,
  onBlur,
  onFocus,
  maxLength,
  isInvalid = false,
  disabled,
  ...props
}) => {
  return (
    <InputContainer htmlFor={id} isInvalid={isInvalid}>
      {label}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        maxLength={maxLength}
        disabled={disabled}
        {...props}
      />
    </InputContainer>
  );
};

export default Input;
