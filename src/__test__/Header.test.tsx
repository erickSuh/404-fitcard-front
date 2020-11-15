import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from 'components/Header';
import theme from 'styles/theme/main';

test('should render a header', () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
      </Router>
    </ThemeProvider>,
  );
  const linkElement = screen.getByText(/Cadastro/i);
  expect(linkElement).toBeInTheDocument();
});
