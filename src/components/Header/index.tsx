import React from 'react';

import { HeaderContainer, ImageContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ImageContainer src={`${process.env.PUBLIC_URL}/FITCARD_OUTUBRO_ROSA.png`} alt="FITCARD_OUTUBRO_ROSA" />
    </HeaderContainer>
  );
};

export default Header;
