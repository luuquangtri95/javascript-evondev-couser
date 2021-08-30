import { classifyStudentV3 } from './main';
describe('classifyStudentV3()', () => {
  test('should return invalid mark ! when n < 0', () => {
    const value = classifyStudentV3(-1);
    expect(value).toBe('giá trị không hợp lệ');
  });
  test('should return invalid mark ! when n > 10', () => {
    const value = classifyStudentV3(11);
    expect(value).toBe('giá trị không hợp lệ');
  });
  test('should return exellence ! when n > 8', () => {
    const value = classifyStudentV3(9);
    expect(value).toBe('exellence');
    const value1 = classifyStudentV3(10);
    expect(value).toBe('exellence');
  });
  test('should return good ! when [7-8]', () => {
    expect(classifyStudentV3(7)).toBe('good');
    expect(classifyStudentV3(8)).toBe('good');
  });
  test('should return not good ! when [4-6]', () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentV3(n)).toBe('not good');
    });
  });
  test('should return not bad ! when n [1-3]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudentV3(n)).toBe('bad');
    });
  });
});
