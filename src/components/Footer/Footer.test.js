import { render } from '@testing-library/react';
import Footer from './Footer';

test('Should render Footer component successfully', () => {
  render(<Footer />);
  const element = document.querySelector('.Footer-min');
  expect(element).toBeInTheDocument();
});
