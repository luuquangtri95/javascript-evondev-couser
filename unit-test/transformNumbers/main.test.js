import { transformNumbers } from './main';

describe('transformNumber()', () => {
  test('should return false when input not an array or empty array', () => {
    expect(transformNumbers({})).toBe(false);
    expect(transformNumbers(1)).toBe(false);
    expect(transformNumbers(null)).toBe(false);
    expect(transformNumbers(undefined)).toBe(false);
    expect(transformNumbers('')).toBe(false);
  });

  test('should return empty array when input empty array', () => {
    expect(transformNumbers([])).toEqual([]);
  });
  test('should return numberList when array 1 number', () => {
    expect(transformNumbers([1])).toEqual([1]);
  });
  test('should return new array 2 number transform position', () => {
    expect(transformNumbers([4, 2])).toEqual([2, 4]);
  });
  test('should return new array 3 number transform position', () => {
    expect(transformNumbers([2, 4, 6])).toEqual([4, 8, 4]);
  });
  test('should return new array 4 number transform position', () => {
    expect(transformNumbers([2, 4, 6, 8])).toEqual([4, 8, 12, 6]);
  });
});
