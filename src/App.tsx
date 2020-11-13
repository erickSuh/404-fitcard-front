import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import theme from './styles/theme/main';
import Register from './containers/Register';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Register />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
