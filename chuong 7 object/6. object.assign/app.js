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

// object assign trong DOM
const h1 = document.createElement('h1');
const body = document.body;
h1.innerText = 'luu quang tri';
h1.className = 'test test-2';

Object.assign(h1.style, {
  color: 'red',
  backgoundColor: '#333',
});

body.appendChild(h1);
