/**
 * object.entries()
 * return 1 array nested dạng cặp [[key, value],[key, value]]
 */

const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log('hi');
  },
};

console.log(Object.entries(student));
