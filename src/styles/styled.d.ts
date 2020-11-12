import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      header: string;
      primary: string;
      secondary: string;
      invalid: string;
      background: string;
    };
    fonts: {
      fontFamily: string;
      fontStyle: string;
      fontWeight: string;
    };
  }
}
