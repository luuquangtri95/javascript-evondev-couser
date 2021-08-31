import { hasEmail } from './main';

describe('hasEmail()', () => {
  test('should return empty string when empty string', () => {
    expect(hasEmail('')).toBe('');
  });
  test('should return false when not contain @gmail.com ', () => {
    expect(hasEmail('tri@hotmail.com')).toBe(false);
  });
  test('should return true when contain @gmail.com ', () => {
    expect(hasEmail('tri@gmail.com')).toBe(true);
  });
});
