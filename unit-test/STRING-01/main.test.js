import { countWords } from './main';

describe('countWords()', () => {
  test('should return 0 if str not string', () => {
    // expect(countWords(0)).toEqual(0);
    // expect(countWords([])).toEqual(0);
    // expect(countWords({})).toEqual(0);
    // expect(countWords(null)).toEqual(0);
    // expect(countWords(undefined)).toEqual(0);
    // expect(countWords('')).toEqual(0);
  });

  test('should returen true is str.length > 0', () => {
    expect(countWords('easy frontedn')).toEqual(2);
  });
});
