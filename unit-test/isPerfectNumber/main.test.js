import { isPerfectNumber } from './main';

describe('isPerfectNumber()', () => {
  test('should return false if not a number', () => {
    expect(isPerfectNumber(-1)).toBe(false);
    expect(isPerfectNumber('')).toBe(false);
    expect(isPerfectNumber([])).toBe(false);
    expect(isPerfectNumber({})).toBe(false);
    expect(isPerfectNumber(null)).toBe(false);
    expect(isPerfectNumber(undefined)).toBe(false);
  });

  test('should return number is perfectNumber', () => {
    expect(isPerfectNumber(5)).toBe(false);
  });
  test('should return number is perfectNumber', () => {
    expect(isPerfectNumber(6)).toBe(true);
  });
});
