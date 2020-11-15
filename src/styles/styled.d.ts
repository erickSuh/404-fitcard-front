import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      header: string;
      primary: string;
      secondary: string;
      hover: string;
      text: string;
      invalid: string;
      background: string;
    };
    fonts: {
      fontFamily: string;
      fontStyle: string;
      fontWeight: string;
    };
    width: {
      tablet: string;
      desktop: string;
    };
  }
}
