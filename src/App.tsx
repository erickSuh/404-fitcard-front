import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';

import GlobalStyle from './styles/global';
import theme from './styles/theme/main';
import Home from './containers/Home';
import Register from './containers/Register';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro" exact component={Register} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
