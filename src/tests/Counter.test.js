//References: https://testing-library.com/docs/react-testing-library/example-intro
//References: App.test.js example test

// import necessary react testing library helpers here
import { render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // check to see if the initial count has a value of 0
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  //assert that this test starts with a 0 count, if it does not it is unclear how we will ensure that the increment is incrementing by 1
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();

  //click the increment button
  fireEvent.click(screen.getByText('+'))

  //assert that the counter value has increased by 1
  const updatedCount = screen.getByText(/1/i);
  expect(updatedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  //assert that this test starts with a 0 count, if it does not it is unclear how we will ensure that the decrement is decrementing by 1
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();

  //click the decrement button
  fireEvent.click(screen.getByText('-'))

  //assert that the counter value has decreased by 1
  const updatedCount = screen.getByText(/-1/i);
  expect(updatedCount).toBeInTheDocument();
});
