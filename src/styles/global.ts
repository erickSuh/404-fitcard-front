import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.primary};
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
  
  body {
    color: ${(props) => props.theme.colors.primary};
    background: #f7f3f7;
  }
`;
