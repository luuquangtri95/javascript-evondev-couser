import { isAllPerfectNumbers } from './main';

describe('isAllPerfectNumber()', () => {
  test('should ', () => {
    expect(isAllPerfectNumbers([])).toBe(false);
    expect(isAllPerfectNumbers('')).toBe(false);
    expect(isAllPerfectNumbers(1)).toBe(false);
    expect(isAllPerfectNumbers(null)).toBe(false);
    expect(isAllPerfectNumbers(undefined)).toBe(false);
    expect(isAllPerfectNumbers({})).toBe(false);
  });

  test('should return false when 0 number is perfect number', () => {
    expect(isAllPerfectNumbers([1, 2, 3])).toBe(false);
  });
  test('should return false when 1 number is perfect number', () => {
    expect(isAllPerfectNumbers([1, 6])).toBe(false);
  });
  test('should return true when 1 number is perfect number', () => {
    expect(isAllPerfectNumbers([1, 6])).toBe(false);
  });
  test('should return true when 2 number is perfect number', () => {
    expect(isAllPerfectNumbers([6, 28])).toBe(true);
  });
  test('should return true when 2 number is perfect number', () => {
    expect(isAllPerfectNumbers([6])).toBe(true);
  });
});
