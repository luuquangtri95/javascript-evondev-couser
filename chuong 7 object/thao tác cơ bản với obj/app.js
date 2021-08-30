/**
 * các thao tác với obj
 */
const student = {
  name: 'tri',
  age: 12,
  class: '12A4',
  job: 'student',
};

// lấy value từ obj
const name = student.name;
const age = student.age;

// use destructoring
const { name, age, ...rest } = student;

// kiểm tra key có tồn tại trong obj hay không

'name' in student; //true
'isHero' in student; //false

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
