/**
 * method object.keys
 * return 1 array contain keys of object, có thể dùng các method của for
 */

const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log('hi');
  },
};
console.log(Object.keys(student));
