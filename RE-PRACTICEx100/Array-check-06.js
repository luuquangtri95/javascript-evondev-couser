const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  if (studentId < 0 || !Number(studentId)) return false;

  return studentList.some((student) => student.id === studentId);
}

console.log(hasStudent(studentList, 1)); // true
console.log(hasStudent(studentList, 3)); // false
