import { isIncreasingNumber } from './main';

describe('isIncreasingNumber()', () => {
  test('should return false when input not a number', () => {
    expect(isIncreasingNumber(-2)).toBe(false);
    expect(isIncreasingNumber(null)).toBe(false);
    expect(isIncreasingNumber(undefined)).toBe(false);
    expect(isIncreasingNumber({})).toBe(false);
    expect(isIncreasingNumber([])).toBe(false);
    expect(isIncreasingNumber('')).toBe(false);
  });

  test('should return false dublicate number', () => {
    expect(isIncreasingNumber(11)).toBe(false);
  });
  test('should return false when number inc after derc', () => {
    expect(isIncreasingNumber(12321)).toBe(false);
  });

  test('should return true when number inc', () => {
    expect(isIncreasingNumber(123)).toBe(true);
  });
});
