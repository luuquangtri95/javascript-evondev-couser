import { isPerfectSquare } from './main';

describe('isPerfectSquare()', () => {
  test('should return false when n < 0 or n not a numbers', () => {
    expect(isPerfectSquare(-1)).toBe(false);
    expect(isPerfectSquare([])).toBe(false);
    expect(isPerfectSquare({})).toBe(false);
    expect(isPerfectSquare('')).toBe(false);
    expect(isPerfectSquare(null)).toBe(false);
    expect(isPerfectSquare(undefined)).toBe(false);
  });

  test('should return false if sqrt n là float', () => {
    expect(isPerfectSquare(10)).toBe(false);
  });
  test('should return true if sqrt n la native number', () => {
    expect(isPerfectSquare(4)).toBe(true);
  });
  test('should return true if sqrt n la native number', () => {
    expect(isPerfectSquare(9)).toBe(true);
  });
  test('should return true if sqrt n la native number', () => {
    expect(isPerfectSquare(25)).toBe(true);
  });
  test('should return true if sqrt n la native number', () => {
    expect(isPerfectSquare(36)).toBe(true);
  });
});
