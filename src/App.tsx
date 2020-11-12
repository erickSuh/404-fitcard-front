import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import theme from './styles/theme/main';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header className="App-header">
          <h1>HOme</h1>
        </header>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
