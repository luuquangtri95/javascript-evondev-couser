/**
 * systax cơ bản của object
 * {
 * key1:value1
 * key2:value2
 * ...
 * }
 */
// exemple
const student1 = {
  id: 1,
  name: 'tri',
  name: 'abc', // lưu ý: key nào đến sau sẽ được ưu tiên hơn => student1.name => abc
  isHero: true,
  'key has space': 'supper',
  sayhi() {
    console.log('heloow');
  },
};

// lấy key có space
console.log(student1['key has space']); //supper

const student = {
  id: 1,
  name: 'van a',
  isHero: true,
};

// cập nhật giá trị cho key
student.name = 'văn b';
// thêm new key cho object
student.age = 18;
student['mark'] = 10;
console.log(student);

// xoá 1 key trong object
delete student.name;

console.log(student.name); // undefined
