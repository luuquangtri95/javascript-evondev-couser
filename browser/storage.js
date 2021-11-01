const student = {
  name: 'tri',
  age: 12,
};
localStorage.setItem('student', JSON.stringify(student));
let studentGetLocal = JSON.parse(localStorage.getItem('student'));
