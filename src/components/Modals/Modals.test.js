import { render } from '@testing-library/react';
import Modals from './Modals';

test('Should render UsersbyCountry component successfully', () => {
  render(<Modals />);
  const element = document.querySelector('.UsersbyCountry-min');
  expect(element).toBeInTheDocument();
});
