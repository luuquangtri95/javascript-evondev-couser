/**
 * object.assign()
 * sao chép dữ liệu của object này sang object khác
 * gộp 2 object lại
 */

const student = {
  name: 'tri',
  age: 22,
  isDev: true,
  hi: function () {
    console.log('hi');
  },
};

const a = { firstName: 'tri' };
const b = { lastName: 'bi' };
const c = Object.assign(a, b);
const d = { ...a, ...b };
console.log(c);

// clone obj bằng assign
const cloneObj = Object.assign({}, student);
console.log(cloneObj);
