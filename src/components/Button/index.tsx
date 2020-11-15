import React from 'react';

import Params from './types';
import { ButtonComponent } from './styles';

const Button: React.FC<Params> = ({
  id,
  name,
  className,
  backgroundColor,
  color,
  onClick,
  label,
  style,
  ...props
}: Params) => {
  return (
    <ButtonComponent
      id={id}
      name={name}
      backgroundColor={backgroundColor}
      color={color}
      className={className}
      onClick={onClick}
      style={style}
      {...props}
    >
      {label}
    </ButtonComponent>
  );
};

export default Button;
