import { render } from '@testing-library/react';
import UsersbyCountry from './UsersbyCountry';

test('Should render UsersbyCountry component successfully', () => {
  render(<UsersbyCountry />);
  const element = document.querySelector('.UsersbyCountry-min');
  expect(element).toBeInTheDocument();
});
