import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import Panel from 'components/Panel';
import theme from 'styles/theme/main';

test('should render a input', () => {
  render(
    <ThemeProvider theme={theme}>
      <Panel>TEST</Panel>
    </ThemeProvider>,
  );

  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toBeInTheDocument();
});
