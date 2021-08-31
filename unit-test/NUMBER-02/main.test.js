import { isDecreasingNumber } from './main';

describe('isDecreasingNumber()', () => {
  test('should return false when input not a number', () => {
    expect(isDecreasingNumber(-2)).toBe(false);
    expect(isDecreasingNumber([])).toBe(false);
    expect(isDecreasingNumber(null)).toBe(false);
    expect(isDecreasingNumber(undefined)).toBe(false);
    expect(isDecreasingNumber('')).toBe(false);
    expect(isDecreasingNumber({})).toBe(false);
  });

  test('should return false when number same', () => {
    expect(isDecreasingNumber(11)).toBe(false);
  });

  test('should return false when input is number increase not decrease', () => {
    expect(isDecreasingNumber(12321)).toBe(false);
  });

  test('should return true when input is number decrease', () => {
    expect(isDecreasingNumber(321)).toBe(true);
  });
});
