import styled from 'styled-components';

interface IButton {
  backgroundColor?: string;
  color?: string;
}

export const ButtonComponent = styled.button`
  margin: 1rem;
  background-color: ${(props: IButton) => props.backgroundColor};
  color: ${(props: IButton) => props.color};
`;
