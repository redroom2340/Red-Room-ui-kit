import { render } from '@testing-library/react';
import Badges from './Badges';

test('Should render Badges component successfully', () => {
  render(<Badges />);
  const element = document.querySelector('.Badges-min');
  expect(element).toBeInTheDocument();
});
