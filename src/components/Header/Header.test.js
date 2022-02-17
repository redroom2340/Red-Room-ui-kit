import { render } from '@testing-library/react';
import Header from './Header';

test('Should render Global HR Forum component successfully', () => {
  render(<Header />);
  const element = document.querySelector('.global-hr-forum-min');
  expect(element).toBeInTheDocument();
});
