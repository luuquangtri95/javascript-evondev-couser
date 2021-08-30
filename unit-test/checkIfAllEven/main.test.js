import { checkIfAllEvenV1 } from './main';

describe('checkIfAllEvenV1()', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvenV1(1)).toBe(false);
    expect(checkIfAllEvenV1('')).toBe(false);
    expect(checkIfAllEvenV1({})).toBe(false);
    expect(checkIfAllEvenV1(null)).toBe(false);
    expect(checkIfAllEvenV1(undefined)).toBe(false);
  });
  test('should return false when array is empty', () => {
    expect(checkIfAllEvenV1([])).toBe(false);
  });
  test('should return false when array has no even number', () => {
    expect(checkIfAllEvenV1([1, 3, 5, 7])).toBe(false);
  });
  test('should return false when array has some even number', () => {
    expect(checkIfAllEvenV1([1, 2, 4, 7])).toBe(false);
  });
  test('should return false when array has all even number', () => {
    expect(checkIfAllEvenV1([2, 4, 6, 8])).toBe(true);
  });
});
