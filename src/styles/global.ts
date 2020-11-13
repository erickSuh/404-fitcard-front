import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
    background: transparent;
    font-size: 12px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  label {
    font-size: 14px;
  }

  span {
    font-size: 12px;
  }

  p {
    font-size: 12px;
  }

  select {
    border: none;
  }

  button {
    border: none;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:focus {
      border: none;
      outline: none;
    }

    &:hover {
      transition: background-color 1s;
      background-color: ${(props) => props.theme.colors.hover};
      cursor: pointer;
    }
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid rgba(0, 0, 0, .25);
    font-size: 16px;

    &:focus {
      outline: none;
      box-shadow: 0 0 1rem rgba(0, 123, 200, .5);
    }
  }
  
  body {
    display: block;
    color: ${(props) => props.theme.colors.primary};
    background: #f7f3f7;
  }
`;
