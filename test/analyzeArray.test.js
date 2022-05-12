import { analyzeArray } from './analyzeArray';

it('Expects to get average of an array', () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    max: 8,
    min: 1,
    length: 6,
  }));
