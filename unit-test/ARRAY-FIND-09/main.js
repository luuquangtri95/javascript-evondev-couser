/**
 * : Tìm vị trí của student có id cho trước
 * 
Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.

 */

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList)) return undefined;

  return studentList.findIndex((student, index) => {
    if (student.id === studentId) {
      return student;
    }
  });
}

console.log(findStudentById(studentList, 1)); // 0
console.log(findStudentById(studentList, 3)); // -1
