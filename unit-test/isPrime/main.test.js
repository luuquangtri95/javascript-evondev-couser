import { isPrime } from './main';

describe('isPrime()', () => {
  test('should return false when input not number', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime([])).toBe(false);
    expect(isPrime({})).toBe(false);
    expect(isPrime(undefined)).toBe(false);
    expect(isPrime(null)).toBe(false);
    expect(isPrime('')).toBe(false);
  });
  test('should retun false when input n < 2', () => {
    expect(isPrime(1)).toBe(false);
  });
  test('should return is prime number', () => {
    [2, 3, 5, 7, 11].forEach((item) => {
      expect(isPrime(item)).toBe(true);
    });
  });
});
