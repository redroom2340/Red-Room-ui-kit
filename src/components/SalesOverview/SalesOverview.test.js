import { render } from '@testing-library/react';
import SalesOverview from './SalesOverview';

test('Should render UsersbyCountry component successfully', () => {
  render(<SalesOverview />);
  const element = document.querySelector('.SalesOverview-min');
  expect(element).toBeInTheDocument();
});
