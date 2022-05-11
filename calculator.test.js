import { calculator } from './calculator';

it('Adds two numbers', () => expect(calculator.add(3, 2)).toEqual(5));
it('Subtracts two numbers', () => expect(calculator.subtract(3, 2)).toEqual(1));
it('Multiplies numbers', () => expect(calculator.multiply(4, 2)).toEqual(8));
it('Divides numbers', () => expect(calculator.divide(9, 3)).toEqual(3));

it('Performs complicated operations', () =>
  expect(
    calculator.add(calculator.multiply(2, 3), calculator.subtract(5, 2))
  ).toEqual(9));
