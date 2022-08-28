/**
 * Greet should render the thext hello and if a name is passed into the component
 * It should render hello followed by the name
 */

import {render, screen} from '@testing-library/react';
import { Greet } from './Greet';

test('Greet ran success', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
})

test('Greet with name ran success', () => {
  render(<Greet name='Arpan' />);
  const textElement = screen.getByText('Hello Arpan');
  expect(textElement).toBeInTheDocument();
})
