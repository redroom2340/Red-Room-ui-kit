import { render } from '@testing-library/react';
import BrowserUsedByUsers from './BrowserUsedByUsers';

test('Should render Articles component successfully', () => {
  render(<BrowserUsedByUsers />);
  const element = document.querySelector('.BrowserUsedByUsers-min');
  expect(element).toBeInTheDocument();
});
