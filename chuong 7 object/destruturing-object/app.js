/**
 * destructuring object
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

const { name, age, isDev, ...rest } = student;
/**
 * tương đương với:
 * const name = student.name
 * const age = student.age
 * const isDev = student.isDev
 */
console.log(rest);
console.log(name, age, isDev);
// normal func
function whatYourInfo(name, age, school) {
  console.log(name, age, school);
}
// func with object parameter
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  name: 'tri',
  age: '26',
  school: 'spkt',
};
console.log(whatYourInfo(newObj));

// object destruturing paremater
function whatYourInfo({ name, age, school }) {
  console.log(name, age, school);
}
console.log({ name: 'trisf', age: '29', school: 'slpkt' });
