/**
 * write func check value is object ??
 */
// {} [] null =>> typeof 3 thangwf nay đều là object

function isObject(value) {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) return true;
  return false;
}
// {} => plain object

/**
 * {a:1,b:2} ->> [["a",1], ["b",2]]
 */
// cach 1
function objectToArray(obj) {
  // chcek nếu khôgn phải object thì dừng
  if (!isObject(obj)) return;
  // if không phải oject mình sẽ xử lý
  return Object.entries(obj);
}
console.log(objectToArray({ a: 1, b: 2 }));

// cach 2
function objectToArray(obj) {
  if (!isObject(obj)) return;
  const value = Object.keys(obj).map((key) => [key, obj[key]]); //  [a, b];
  return value;
}

console.log(objectToArray({ a: 1, b: 2 }));

// cach 3
function objectToArray(obj) {
  if (!isObject(obj)) return;
  let result = [];
  for (let key in obj) {
    // hasOwnProperty(key) => nếu obj chứa key trả về true và ngược lại false
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

console.log(objectToArray({ a: 1, b: 2 }));

/**
 * without
 * input ({a:1,b:2}, 'b') => {a:1}
 */
// ...key : rest paramater
function without(obj, ...key) {
  console.log(key); // [ 'a', 'b' ]
  //spread operator
  const newObj = { ...obj }; //clone object
  key.forEach((item) => delete newObj[item]); // foreach: duyệt mảng nhưng không trả về mảng mới
  return newObj;
}
console.log(without({ a: 1, b: 2 }, 'a', 'b'));

/**
 * kiểm tra 2 obj có bằng nhau không
 */
// cach 1: check keys length
function isEqualObj(obj1, obj2) {
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length === objkey2.length) return true;
  return false;
}
console.log(isEqualObj({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));
// cach 2: check values
function isEqualObj(obj1, obj2) {}

/**
 * viết hàm clone object không dung spread
 */

function cloneObj(obj) {
  // if (typeof obj === 'object' && !Array.isArray(obj) && typeof obj !== null) return true;
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}
console.log(cloneObj({ a: 1, b: 2, c: { c1: 2, c: 3 } }));

//create an onject student with name is tri and age 18
const student = {};
student.name = 'tri';
student.age = 26;

/**
 * nhận vào 1 obj điểm số, tính điểm trung bình
 */

function calcAvgMark(obj) {
  if (!obj) return -1;
  // avg = sum / length
  const length = Object.keys(obj).length;
  let sum = 0;
  for (let key in obj) {
    const value = obj[key];
    sum += value;
  }
  return (sum / length).toFixed(1);
}
console.log(calcAvgMark({ math: 10, englist: 8 }));

/**
 * viết hàm isEqual(obj1,obj2)
 * true: nếu số lượng keys của 2 obj bằng nhau, hoặc trả về ghía trị của từng key
 * ngược lại false
 */

function isEqual(obj1, obj2) {
  const lengthObj1 = Object.keys(obj1).length;
  const lengthObj2 = Object.keys(obj2).length;
  if (lengthObj1 === lengthObj2) return true;
  return false;
}
