import { testNumber } from './ceasarCipher';

it('makes a check', () => {
  expect(testNumber('abc', 1)).toEqual('bcd');
});
