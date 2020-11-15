import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from 'components/Input';

test('should render a input', () => {
  const handleChange = jest.fn();
  render(<Input id="test_button" type="text" label="teste1" onChange={handleChange} />);
  const linkElementLabel = screen.getByText(/teste1/i);
  expect(linkElementLabel).toBeInTheDocument();

  const linkElementInput = screen.getByLabelText(/teste1/i);
  expect(linkElementInput).toBeInTheDocument();

  fireEvent.change(linkElementInput, { target: { value: '23' } });
  expect(linkElementInput.value).toBe('23');
});
