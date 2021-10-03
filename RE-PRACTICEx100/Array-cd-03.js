const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.filter((student) => student.id !== studentId);
}
console.log(removeStudentById(studentList, 1));
