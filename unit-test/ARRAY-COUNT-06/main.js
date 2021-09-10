/**
 * Ðếm số lượng students có điểm trung bình lớn hơn hoặc bằng avgMark
 * 
Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn
hoặc bằng avgMark

Cách tính điểm trung bình môn:

Giả sử mình không biết trước sẽ có bao nhiêu môn
Dựa vào object marks để xác định, có bao nhiêu keys là bấy nhiêu môn và tính điểm trung bình môn
tương ứng.

Một student list sẽ đảm bảo là số lượng keys trong object marks sẽ giống nhau.
 */

function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;

  const newStudentList = [...studentList];
  return newStudentList.filter((student) => calcAvgObj(student) >= avgMark).length;
}

function calcAvgObj(obj) {
  if (!Object(obj)) return false;

  const { ...marksList } = obj.marks;
  const lengthMarks = Object.keys(marksList).length;

  return Object.values(marksList).reduce((a, b) => (a + b) / lengthMarks);
}

const studentList = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
];
console.log(countStudents(studentList, 7));
