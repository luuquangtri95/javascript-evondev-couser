import { isSymetricNumber } from './main';

describe('isSymetricNumber()', () => {
  test('should return  false if n not a number || n < 0', () => {
    expect(isSymetricNumber(-1)).toBe(false);
    expect(isSymetricNumber({})).toBe(false);
    expect(isSymetricNumber([])).toBe(false);
    expect(isSymetricNumber('')).toBe(false);
    expect(isSymetricNumber(null)).toBe(false);
    expect(isSymetricNumber(undefined)).toBe(false);
  });
  test('should return false if khong phai so doi xung', () => {
    expect(isSymetricNumber(10)).toBe(false);
  });
  test('should return true', () => {
    expect(isSymetricNumber(11)).toBe(true);
  });
  test('should return false if khong phai so doi xung', () => {
    expect(isSymetricNumber(12321)).toBe(true);
  });
  test('should return false if khong phai so doi xung', () => {
    expect(isSymetricNumber(321123)).toBe(true);
  });
});
