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
/************************************************************************************ */
/**
 * object literal
 * obj construster
 */

// literal
const objLiteral = {};
// constructor
const objconstructor = new Object();

const student = {
  name: 'evondev',
  age: 27,
  male: true,
  'last-name': 'tuan', // note (khoong thể truy xuất = student.last-name được =>> phải dùng student["last-name"])
  hi: function () {
    console.log('hello');
  },
};

// 2 cách truy xuất giá trị của obj
// 2.1 dot notation
console.log(student.name);
// 2.2 bracket notation ["key"]
console.log(student['age']);
console.log(student['last-name']);

// thay đổi gia trị của obj, phải biết key của obj
student.age = 20;
student.male = 'male';
student.isDev = true;
student['is-dev'] = 'is dev'; // lưu ý chỗ này
student.hello = function () {
  console.log('hello');
};
console.log(student);

// delete object
delete student['last-name'];
