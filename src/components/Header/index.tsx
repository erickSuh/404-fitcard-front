import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, ImageContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ImageContainer src={`${process.env.PUBLIC_URL}/FITCARD_OUTUBRO_ROSA.png`} alt="FITCARD_OUTUBRO_ROSA" />
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastro</Link>
    </HeaderContainer>
  );
};

export default Header;
