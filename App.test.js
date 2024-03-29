import { render, screen } from '@testing-library/react';
import App from './App';

/* This is a test that is checking to see if the text "learn react" is in the document. */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
