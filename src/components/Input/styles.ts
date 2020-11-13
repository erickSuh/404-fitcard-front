import styled from 'styled-components';

interface IInput {
  isInvalid?: boolean;
}

export const InputContainer = styled.label`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: ${(props: IInput) => (props.isInvalid ? 'red' : 'inherit')};

  input {
    border-color: ${(props: IInput) => (props.isInvalid ? 'red' : 'inherit')};
    margin-top: 0.5rem;
  }
`;
