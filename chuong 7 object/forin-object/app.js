/**
 * for in
 * for (let key in student)
 */

const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log('hi');
  },
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
  /**
   * student[name]
   * student[age]
   * student[isDev]
   * student[hi]
   */
}
