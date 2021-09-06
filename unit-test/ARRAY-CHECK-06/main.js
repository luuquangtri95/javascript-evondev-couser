/**
 * Kiểm tra có student có id nào đó trong mảng không
Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là studentId không?
 */

function hasStudent(studentList, studentId) {
  if (!Object(studentList)) return {};

  let valueStudentList = Object.values(studentList);
  return valueStudentList.some((item) => {
    if (item.id === studentId) {
      return true;
    }
  });
}

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];
console.log(hasStudent(studentList, 1));
console.log(hasStudent(studentList, 3));
