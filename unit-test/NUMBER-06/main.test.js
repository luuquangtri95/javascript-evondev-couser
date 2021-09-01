import { isPerfectNumber } from './main';

describe('isPerfectNumber()', () => {
  test('should return false if n < 0 || n not a number', () => {
    expect(isPerfectNumber(-2)).toBe(false);
    expect(isPerfectNumber({})).toBe(false);
    expect(isPerfectNumber([])).toBe(false);
    expect(isPerfectNumber('')).toBe(false);
    expect(isPerfectNumber(null)).toBe(false);
    expect(isPerfectNumber(undefined)).toBe(false);
  });

  test('should return false if not is perfectNumber', () => {
    expect(isPerfectNumber(5)).toBe(false);
  });
  test('should retun true if is perfectNumber', () => {
    expect(isPerfectNumber(6)).toBe(true);
  });
  test('should retun true if is perfectNumber', () => {
    expect(isPerfectNumber(28)).toBe(true);
  });
});
