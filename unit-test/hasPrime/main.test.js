import { hasPrime } from './main';

describe('hasPrime()', () => {
  test('should return false not an array', () => {
    expect(hasPrime(1)).toBe(false);
    expect(hasPrime([])).toBe(false);
  });

  test('should return false when 0 number in array is prime', () => {
    expect(hasPrime([1, 4, 6, 8])).toBe(false);
  });
  test('should return true when 1 number in array is prime', () => {
    expect(hasPrime([1, 2, 4, 6])).toBe(true);
  });
  test('should return true when 2 number in array is prime', () => {
    expect(hasPrime([1, 2, 3, 6])).toBe(true);
  });
  test('should return true when 4 number in array is prime', () => {
    expect(hasPrime([11, 2, 3, 7])).toBe(true);
  });
});
