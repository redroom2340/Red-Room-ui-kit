import { render } from '@testing-library/react';
import Accordions from './Accordions';

test('Should render Accordions component successfully', () => {
  render(<Accordions />);
  const element = document.querySelector('.Accordions-min');
  expect(element).toBeInTheDocument();
});
