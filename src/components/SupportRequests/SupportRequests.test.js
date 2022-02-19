import { render } from '@testing-library/react';
import SupportRequests from './SupportRequests';

test('Should render UsersbyCountry component successfully', () => {
  render(<SupportRequests />);
  const element = document.querySelector('.SupportRequests-min');
  expect(element).toBeInTheDocument();
});
