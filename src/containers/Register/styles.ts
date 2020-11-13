import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.width.desktop}) {
    padding: 2rem;
  } ;
`;
