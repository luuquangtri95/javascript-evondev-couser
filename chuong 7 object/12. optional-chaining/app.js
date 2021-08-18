/**
 * optional chaining
 *
 */
const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log(`my name is ${this.name} and i am ${this.age} year old`);
  },
  fullName: {
    name: 'luu quang tri',
  },
};
//trường hợp trong object minh k biết có key này hay k ??
// console.log(student.fullName); //undefined
// console.log(student.fullName.name); // undefined.name

// check điều kiện
// if (student.fullName) {
//   if (student.fullName.name) {
//     console.log(student.fullName.name);
//   }
// }

// =>>>optional chaining : student.fullName?.name?.abc ...
console.log(student.fullName?.name);
