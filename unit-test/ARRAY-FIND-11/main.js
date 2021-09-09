/**
 * Tìm student có điểm môn toán lớn nhất đầu tiên
 * 
Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất
 */

function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

  return studentList.find((student) => student.math === 10);
}

const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 10 },
  { id: 3, name: 'John', math: 10 },
];
console.log(findStudentHavingHighestMark(studentList));
