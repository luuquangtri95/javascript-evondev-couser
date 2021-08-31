import { calcAvgOfAllEvenNumbers } from './main';

describe('calcAvgOfAllEvenNumbers()', () => {
  test('should return 0 when input invalid', () => {
    expect(calcAvgOfAllEvenNumbers(1)).toEqual(0);
    expect(calcAvgOfAllEvenNumbers([])).toEqual(0);
    expect(calcAvgOfAllEvenNumbers('')).toEqual(0);
    expect(calcAvgOfAllEvenNumbers(null)).toEqual(0);
    expect(calcAvgOfAllEvenNumbers(undefined)).toEqual(0);
    expect(calcAvgOfAllEvenNumbers({})).toEqual(0);
  });

  test('should return 0 when 1 item in Array', () => {
    expect(calcAvgOfAllEvenNumbers([1])).toEqual(0);
  });
  test('should return 2 when 2 item Inside 1 even number', () => {
    expect(calcAvgOfAllEvenNumbers([1, 2])).toEqual(2);
  });
  test('should return 3 when 3 item insite has 2 even number', () => {
    expect(calcAvgOfAllEvenNumbers([2, 3, 4])).toEqual(3);
  });
  test('should return 5 when 4 item insite has 3 even number and rounding', () => {
    expect(calcAvgOfAllEvenNumbers([1, 2, 4, 8])).toEqual(5);
  });
});
