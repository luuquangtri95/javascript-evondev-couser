const studentList = [
  { id: 1, name: 'Alice', gender: 'male' },
  { id: 2, name: 'aliCE', gender: 'female' },
  { id: 3, name: 'Easy Frontend', gender: 'male' },
];

function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.some((student) => student.name.toLowerCase() === 'alice');
}

console.log(hasAlice(studentList));
