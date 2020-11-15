import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from 'components/Button';

test('should render a button', () => {
  const handleClick = jest.fn();
  render(<Button id="test_button" onClick={handleClick} label="teste1" />);
  const linkElement = screen.getByText(/teste1/g);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
