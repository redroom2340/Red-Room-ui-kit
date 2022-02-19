import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('Should render UsersbyCountry component successfully', () => {
  render(<Notifications />);
  const element = document.querySelector('.Notifications-min');
  expect(element).toBeInTheDocument();
});
