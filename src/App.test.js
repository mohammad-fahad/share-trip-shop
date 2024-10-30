import { render, screen } from '@testing-library/react';
import App from './App';

test('displays loading message', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading products.../i);
  expect(loadingElement).toBeInTheDocument();
});

