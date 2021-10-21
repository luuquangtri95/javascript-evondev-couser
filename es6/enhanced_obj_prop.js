// ! property shorthand

const id = 1;
const name = 'tri';
const age = 12;

const student = {
  id: id,
  name: name,
  age: age,
  isHero: false,
};

// shorthand version

const student = {
  id,
  name,
  age,
  isHero: false,
};

// !computed property name

/**
 * 1 . sử dụng khi key có khoảng trắng
 * 2 . sử dụng khi key được xây dựng từ 1 biến khác
 */

const key = 'Power';

const student = {
  id: 1,
  name: 'truie',

  'hero type': 'iron', // key with spaces

  [key]: 50, // lấy giá trị của biến key làm thuộc tính => Power: 50

  [`get${key}`]: function () {
    return 100;
  },
};

student.id; //1
student.Power; // 50

student.hero type // syntax error
student["hero type"] // iron

student.Power // 50
student[key] //50 <=> student[Power]

student.getPower() // 100


// ! destructuring

const student = {
  id:1, 
  name: "truie"
}

const {id, name} = student

// array destructuring

const numberList = [5,10,15];

const [a,b] = numberList

// swap

let x = 10;
let y = 20;

[y,x] = [x, y]


// todo rename prop

const student = {
  id:1, 
  name: "truie"
}

const {id: stundentId, name, age = 18} = student

console.log(stundentId);
console.log(age);

console.log(id); // id đã bị gán băng stundentId => id is not define


// ! object assign

/**
 * object assign không tạo ra tham chiếu mới mà là gom thuộc tính vào thằng target
 */

const a = {id:1}
const b = {name:"tri"}
const c = Object.assign(a,b); // a: target , b: source

console.log(a);
console.log(c);

console.log(a === c); // true vì nó không tạo ra tham chíu mới