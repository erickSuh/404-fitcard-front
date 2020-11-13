import styled from 'styled-components';

export const PanelContainer = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    padding: 4rem;
  } ;
`;
