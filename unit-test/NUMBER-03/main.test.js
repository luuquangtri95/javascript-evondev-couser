import { isIncreasingNumberByDistance } from './main';

describe('isIncreasingNumberByDistance()', () => {
  test('should return false when n,x not a number', () => {
    expect(isIncreasingNumberByDistance(-1, -1)).toBe(false);
    expect(isIncreasingNumberByDistance(null, null)).toBe(false);
    expect(isIncreasingNumberByDistance(undefined, undefined)).toBe(false);
    expect(isIncreasingNumberByDistance({}, {})).toBe(false);
    expect(isIncreasingNumberByDistance('', '')).toBe(false);
    expect(isIncreasingNumberByDistance([], [])).toBe(false);
  });
  test('should return false when number 11', () => {
    expect(isIncreasingNumberByDistance(11, 1)).toBe(false);
  });
  test('should return false not number desc to x', () => {
    expect(isIncreasingNumberByDistance(135, 1)).toBe(false);
  });
  test('should return true', () => {
    expect(isIncreasingNumberByDistance(123, 1)).toBe(true);
  });
  test('should return true', () => {
    expect(isIncreasingNumberByDistance(135, 2)).toBe(true);
  });
});
