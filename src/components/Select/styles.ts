import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 16px;
  display: inline-block;
  overflow: hidden;
  padding: 1rem;

  select {
    width: 100%;
    font-weight: bold;
    padding: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
