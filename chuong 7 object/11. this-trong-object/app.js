/**
 * this trong object
 * this keywork
 * this nó sẽ đề cập đến object gần nhất
 */
const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log(`my name is ${this.name} and i am ${this.age} year old`);
  },
};

console.log(student.hi());
