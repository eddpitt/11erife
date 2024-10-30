import { render, screen } from '@testing-library/react';
import EventPage from './EventPage';

test('renders learn react link', () => {
  render(<EventPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
