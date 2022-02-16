import { render } from '@testing-library/react';
import Articles from './Articles';

test('Should render Articles component successfully', () => {
  render(<Articles />);
  const element = document.querySelector('.articles-min');
  expect(element).toBeInTheDocument();
});
