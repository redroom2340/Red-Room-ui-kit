import { render } from '@testing-library/react';
import SalesRevenue from './SalesRevenue';

test('Should render SalesRevenue component successfully', () => {
  render(<SalesRevenue />);
  const element = document.querySelector('.SalesRevenue-min');
  expect(element).toBeInTheDocument();
});
