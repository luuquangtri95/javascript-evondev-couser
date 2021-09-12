/**
 * Xoá một student có id cho trước
 * 
Viết hàm removeStudentById(studentList, studentId) để remove student có id là studentId ra khỏi
mảng studentList và trả về mảng mới.
 */

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  const newSutdentList = [...studentList];

  return newSutdentList.filter((student) => student.id !== studentId);
}
console.log(removeStudentById(studentList, 3));
