import { render, screen } from '@testing-library/react';
import Cards from "./Cards";

test('Should render Cards component successfully', () => {
  render(<Cards>Hello Card</Cards>);
  const element = document.querySelector('.a-cards');
  const linkElement = screen.getByText(/Hello Card/i);
  expect(linkElement).toBeInTheDocument();
  expect(element).toBeInTheDocument();
});

test('Should have the passed classname along with the default classname when passed', () => {
  render(<Cards className="my-custom-card">Hello Card</Cards>);
  const element = document.querySelector('.a-cards');
  expect(element.className.includes("my-custom-card")).toBeTruthy();
});

test('Should have the default class name when no classname is passed', () => {
  render(<Cards>Hello Card</Cards>);
  const element2 = document.querySelector('.a-cards');
  expect(element2.className).toBe("a-cards");
});