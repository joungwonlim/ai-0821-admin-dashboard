import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Button } from './ui/button'; // Assuming path to shadcn Button

test('Button renders with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('Button handles click event', () => {
  const handleClick = vi.fn(); // Mock function
  render(<Button onClick={handleClick}>Click me</Button>);
  screen.getByText('Click me').click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
