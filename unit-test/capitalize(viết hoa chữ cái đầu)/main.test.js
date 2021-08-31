import { capitalize } from './main';

describe('capitalize()', () => {
  test('should return "" when not string or string.length = 0 ', () => {
    expect(capitalize('')).toBe('');
  });
  test('should return First letter to Uppercase', () => {
    expect(capitalize('luu QUANG TRI')).toBe('Luu quang tri');
  });
});
