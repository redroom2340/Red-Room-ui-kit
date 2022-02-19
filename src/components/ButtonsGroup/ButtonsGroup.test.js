import { render } from '@testing-library/react';
import ButtonsGroup from './ButtonsGroup';

test('Should render Articles component successfully', () => {
  render(<ButtonsGroup />);
  const element = document.querySelector('.ButtonsGroup-min');
  expect(element).toBeInTheDocument();
});
