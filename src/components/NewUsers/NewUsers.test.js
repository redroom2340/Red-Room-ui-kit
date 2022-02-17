import { render } from '@testing-library/react';
import NewUsers from './NewUsers';

test('Should render Global HR Forum component successfully', () => {
  render(<NewUsers />);
  const element = document.querySelector('.global-hr-forum-min');
  expect(element).toBeInTheDocument();
});
