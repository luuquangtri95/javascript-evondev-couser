import { isDivisibleBy10 } from './main';

describe('isDivisibleBy10()', () => {
  test('should return false if n is not a number || n < 0', () => {
    expect(isDivisibleBy10(-1)).toBe(false);
    expect(isDivisibleBy10('')).toBe(false);
    expect(isDivisibleBy10({})).toBe(false);
    expect(isDivisibleBy10([])).toBe(false);
    expect(isDivisibleBy10(null)).toBe(false);
    expect(isDivisibleBy10(undefined)).toBe(false);
  });

  test('should return false if sum not % 10 === 0', () => {
    expect(isDivisibleBy10(10)).toBe(false);
  });
  test('should return true if sum % 10 === 0', () => {
    expect(isDivisibleBy10(1234)).toBe(true);
  });
  test('should return true if sum % 10 === 0', () => {
    expect(isDivisibleBy10(123455)).toBe(true);
  });
});
