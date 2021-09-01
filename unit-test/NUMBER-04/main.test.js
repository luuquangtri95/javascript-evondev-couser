import { isPrime } from './main';

describe('isPrime()', () => {
  test('should return false when n is not a number or n < 2', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime({})).toBe(false);
    expect(isPrime([])).toBe(false);
    expect(isPrime(null)).toBe(false);
    expect(isPrime(undefined)).toBe(false);
    expect(isPrime('')).toBe(false);
  });

  test('should return false when n % i === 0', () => {
    expect(isPrime(4)).toBe(false);
  });
  test('should return true', () => {
    expect(isPrime(2)).toBe(true);
  });
  test('should return true', () => {
    expect(isPrime(3)).toBe(true);
  });
  test('should return true', () => {
    expect(isPrime(11)).toBe(true);
  });
});
