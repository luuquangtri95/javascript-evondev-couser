const students = [
  { id: 1, gender: 'female' },
  { id: 2, gender: 'female' },
];

function countStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;

  return studentList.filter((student) => student.gender === 'male').length;
}

