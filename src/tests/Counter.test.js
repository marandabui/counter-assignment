// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialMsg = screen.getByTestId("count");
  expect(initialMsg).toHaveTextContent(/0/i);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'))
  const incrementCountMsg = screen.getByTestId("count");
  expect(incrementCountMsg).toHaveTextContent(/1/i);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'))
  const decrementCountMsg = screen.getByTestId("count");
  expect(decrementCountMsg).toHaveTextContent(/-1/i);
});
