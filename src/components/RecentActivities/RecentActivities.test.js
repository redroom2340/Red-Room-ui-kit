import { render } from '@testing-library/react';
import RecentActivities from './RecentActivities';

test('Should render Articles component successfully', () => {
  render(<RecentActivities />);
  const element = document.querySelector('.RecentActivities-min');
  expect(element).toBeInTheDocument();
});
