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
