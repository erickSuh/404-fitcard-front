import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  select {
    margin-top: 0.5rem;
    width: 100%;
    font-weight: bold;
    padding: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
