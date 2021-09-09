/**
 * Tìm student đầu tiên có tất cả điểm >= 5, trừ một môn
 * 
Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn

hơn hoặc bằng 5, tuy nhiên có một môn dưới 5.
 */

const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
];

function findStudent(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return undefined;
  let newStudentList = [...studentList];

  return newStudentList.find((student) => {
    if (
      (student.marks.math < 5 && student.marks.english >= 5 && student.marks.programming >= 5) ||
      (student.marks.english < 5 && student.marks.math >= 5 && student.marks.programming >= 5) ||
      (student.marks.programming < 5 && student.marks.english >= 5 && student.marks.math >= 5)
    ) {
      return student;
    }
  });
}

console.log(findStudent(studentList));
