import { render } from '@testing-library/react';
import SessionsbyDevice from './SessionsbyDevice';

test('Should render SessionsbyDevice component successfully', () => {
  render(<SessionsbyDevice />);
  const element = document.querySelector('.SessionsbyDevice-min');
  expect(element).toBeInTheDocument();
});
