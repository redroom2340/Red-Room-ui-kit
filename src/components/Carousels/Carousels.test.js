import { render } from '@testing-library/react';
import Carousels from './Carousels';

test('Should render Articles component successfully', () => {
  render(<Carousels />);
  const element = document.querySelector('.Carousels-min');
  expect(element).toBeInTheDocument();
});
