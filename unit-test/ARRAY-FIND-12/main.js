/**
 * Tìm student có điểm trung bình môn thấp nhất cuối cùng
 * 
Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất
cuối cùng trong mảng.
 */

function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;
  let lastItem;

  const newStudentList = [...studentList];

  newStudentList.find((student) => {
    let avgStudent = (student.math + student.english) / 2;
    if (avgStudent <= 5) {
      lastItem = student;
    }
  });

  return lastItem;
}
const studentList = [
  { id: 1, name: 'Alice', math: 9, english: 9 },
  { id: 2, name: 'Bob', math: 5, english: 5 },
  { id: 3, name: 'John', math: 5, english: 5 },
];
console.log(findStudentHavingHighestMark(studentList));
// { id: 3, name: 'John', math: 5, english: 5
