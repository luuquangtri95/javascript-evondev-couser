import { hasTwoDigitsWithSum } from './main';

describe('hasTwoDigitsWithSum()', () => {
  test('should false if n,sum < 0 || is not a number', () => {
    expect(hasTwoDigitsWithSum(-1, -1)).toBe(false);
    expect(hasTwoDigitsWithSum({}, {})).toBe(false);
    expect(hasTwoDigitsWithSum('', '')).toBe(false);
    expect(hasTwoDigitsWithSum(null, null)).toBe(false);
    expect(hasTwoDigitsWithSum(undefined, undefined)).toBe(false);
    expect(hasTwoDigitsWithSum([], [])).toBe(false);
  });

  test('should return false if tong n !== sum', () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
  });
  test('should return true if tong n === sum', () => {
    expect(hasTwoDigitsWithSum(10, 1)).toBe(true);
  });
  test('should return false if sum n === sum', () => {
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
  });
});
