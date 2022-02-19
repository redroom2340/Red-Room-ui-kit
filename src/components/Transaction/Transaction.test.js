import { render } from '@testing-library/react';
import Transaction from './Transaction';

test('Should render UsersbyCountry component successfully', () => {
  render(<Transaction />);
  const element = document.querySelector('.UsersbyCountry-min');
  expect(element).toBeInTheDocument();
});
