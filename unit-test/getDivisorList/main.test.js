import { getDivisorList } from './main';

describe('getDivisorList()', () => {
  test('should return false when number < 0', () => {
    expect(getDivisorList(-1)).toBe(false);
    expect(getDivisorList(null)).toBe(false);
    expect(getDivisorList([])).toBe(false);
    expect(getDivisorList('')).toBe(false);
    expect(getDivisorList(undefined)).toBe(false);
  });
  test('should return new Array with divisor number', () => {
    expect(getDivisorList(10)).toEqual([1, 2, 5, 10]);
  });
  test('should return new Array with divisor number', () => {
    expect(getDivisorList(3)).toEqual([1, 3]);
  });
});
