/**
 * object.values()
 * return 1 array contain values of object
 */
const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log('hi');
  },
};

console.log(Object.values(student));
