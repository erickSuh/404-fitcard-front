import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  height: 4rem;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    display: block;
    padding: 1.5rem 2rem;
    height: 7rem;
  }
`;

export const ImageContainer = styled.img`
  height: 100%;
`;
