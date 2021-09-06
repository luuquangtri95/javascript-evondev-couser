/**
 * : Kiểm tra có student giới tính là Nữ tên Alice không
Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
(không phân biệt hoa thường)

 */

function hasAlice(studentList) {
  if (!Object(studentList)) return {};

  let valueStudentList = Object.values(studentList);
  return valueStudentList.some((item) => {
    if (item.name.toLowerCase() === 'Alice'.toLowerCase()) {
      return true;
    }
  });
}

const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];
console.log(hasAlice(studentList));
