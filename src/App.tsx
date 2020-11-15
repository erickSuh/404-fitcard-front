import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import store from './store';

import GlobalStyle from './styles/global';
import theme from './styles/theme/main';
import Home from './containers/Home';
import Register from './containers/Register';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cadastro" exact component={Register} />
              <Route path="/cadastro/:id" exact component={Register} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </ThemeProvider>
      </ToastProvider>
    </Provider>
  );
}

export default App;
