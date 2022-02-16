import { render } from '@testing-library/react';
import GlobalHRForum from './GlobalHRForum';

test('Should render Global HR Forum component successfully', () => {
  render(<GlobalHRForum />);
  const element = document.querySelector('.global-hr-forum-min');
  expect(element).toBeInTheDocument();
});
