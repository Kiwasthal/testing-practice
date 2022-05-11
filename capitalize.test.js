import { capitalize } from './capitalize';

it('Capitalizes String', () =>
  expect(capitalize('hello , World')).toEqual('Hello , World'));
