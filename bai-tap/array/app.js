// đảo ngược 1 chuỗi. ví dụ: "my name is evondev" =>  "evondev is my name is"
function reverseString(str) {
  if (!str) return '';
  const newStr = str.split(' ').reverse().join(' ');
  return newStr;
}
console.log(reverseString('my name is evondev'));

/**
 * đảo ngược 1 chuỗi và ký tự "i love" => "evol i"
 */
function reverseString2(str) {
  if (!str) return '';
  // const newStr = str.split('').reverse().join('');

  const newStr = str.split(''); // ["i","love"]
  return newStr
    .map((item) => item.split('').reverse().join(''))
    .reverse()
    .join(''); // ["i","l","o","v","e"]
}
console.log(reverseString2('i love'));

/**
 * capitalize: "my name is tri" =>> "My Name Is Tuan"
 */

function uppercaseWord(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return '';
  }
  let newword = word.toLowerCase().charAt(0).toUpperCase();
  let orther = word.toLowerCase().slice(1);

  return `${newword}${orther}`;
}
function capitalize(str) {
  const newStr = str
    .split(' ')
    .map((item) => uppercaseWord(item))
    .join(' ');
  return newStr;
}

console.log(capitalize('my name is tri'));

// bài tập test
let arr = [1, 2, 3, 4, 5];
function test(arr) {
  return arr.reduce((a, b) => {
    if (b % 2 === 0) {
      a.push(b);
    }
    return a;
  }, []);
}
console.log(test(arr));

let arr = [1, 1, 2, 2, 3, 3];
function filterArr(arr) {
  return arr.reduce((a, b) => {
    if (a.indexOf(b) === -1) {
      a.push(b);
    }
    return a;
  }, []);
}
console.log(filterArr(arr));

//viết hàm trả về ký tự dài nhất
/**
 * ["love", "esay", "frontend"]
 * frontend
 */

const arr = ['love', 'esay', 'frontend'];
function findLongStringInArray(arr) {
  return arr.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    }
    return b;
  }, arr[0]);
}
console.log(findLongStringInArray(arr));

/**
 * viết hàm chuyển mảng thành obj dung reduce
 * const itemList = [
 * {id:"key1" , value:"Superman"},
 * {id:"key2" , value:"Super woment"},
 * {id:"key3" , value:"Super girl"}
 * ]
 *
 * to
 *
 * const itemMap = {
 * key1: "superman",
 * key2:"..."
 * }
 */
const itemList = [
  { id: 'key1', value: 'Superman' },
  { id: 'key2', value: 'Super woment' },
  { id: 'key3', value: 'Super girl' },
];
/**
 * Ví dụ: 
itemMap = {}
item.id = "test"
item.value = "hello"

thì itemMap[item.id] = item.value
sẽ cho ra kết quả là itemMap sẽ thành { test: "hello" } hehe

example 2: 
let obj = {};
obj['a'] = 1;
console.log(obj);
 */
function changeArrayToOj(arr) {
  return arr.reduce((a, b) => {
    a[b.id] = b.value;
    return a;
  }, {});
}

console.log(changeArrayToOj(itemList));

/**
 * cho mảng gồm nhiều giá trị [1,1000,false, null,"evondev",undefined,"javascript",[1,2,3]] viết fn loại bỏ các giá trị falsy ra khỏi mảng giữ lại truthy. falsy: 0 null undefined false "" NaN
 */
// new Boolean

const arr = [1, 1000, false, null, 'evondev', undefined, 'javascript', [1, 2, 3], '', NaN];
function removeFalsyValue(arr) {
  // cach 1
  // return arr.filter((item) => Boolean(item));

  // cach2
  let newArr = [];
  for (const value of arr) {
    console.log(value);
    if (Boolean(value)) {
      newArr.push(value);
    }
  }
  return newArr;
}
console.log(removeFalsyValue(arr));

/**
 * cho 1 mangr phức tạp, [[1,2,3], [false,null],[1,5,6],["javascript"],[888,999,[90]]] và kết quả mong muốn là 1 mảng đã được làm phẳng
 */

const compflexArr = [[1, 2, 3], [false, null], [1, 5, 6], ['javascript'], [888, 999, [90, 91]]];
function flatArr(arr) {
  // cachs 1:
  // let flatNewArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let item = arr[i];
  //   if (Array.isArray(arr[i])) {
  //     flatArr(item);
  //   } else {
  //     flatNewArr.push(item);
  //   }
  // }

  //cach 2
  // const result = arr.flat(2);
  // return result;

  //cach 3
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur);
  }, []);

  // return flatNewArr;
}

console.log(flatArr(compflexArr));

/**
 * đảo ngược số nguyên 1234 -> 4321 , -567 -> -765
 * Math.sign(số dương) return 1
 * Math.sign(số âm) return -1
 */
function reverseNumber(number) {
  // conver number to string
  // split =>> [1,2,3]
  // reverse => [3,2,1]
  //join => 321 => string
  const value = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
  console.log(value);
}
console.log(reverseNumber(-1234));

/**
 * viết chương trình có tên fizzbuzz đầu vào là 1 số nguyên, chyaj từ 1 tới số nguyên đó rồi kiểm tra số chia hết cho 2 thì in ra "fizz", nếu chia hết cho 3 thì in buzz, chia 2 3 thi fizzbuzz
 */

function fizzbuzz(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      console.log('fizzbuzz');
    } else if (i % 2 === 0) {
      console.log('fizz');
    } else if (i % 3 === 0) {
      console.log('buzz');
    }
  }
}
console.log(fizzbuzz(3));

/**
 * cho 1 chuỗi bất kì, đếm só lượng ký tự u e o a i
 * vd: evondev => 3
 */

function countVowels(str) {
  let count = 0;
  let char = 'ueoai';
  for (let c of str.toLowerCase()) {
    if (char.includes(c)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('LUU QUANG TRI'));

//cho 1 mang: [1,1,1,2,3,5,5,2,6,7,7,8,8,9,3] trả về 1 mảng unique
let arr = [1, 1, 1, 2, 3, 5, 5, 2, 6, 7, 7, 8, 8, 9, 3];
function uniquArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(uniquArr(arr));

/**
 * viết 1 fn xử lý mảng lớn phân thành nhiều mảng con dựa vào so nguyênd dầu vào [1,2,3,4,5] , 2 =>> [[1,2],[3,4],[5]]
 */
function splitArr(arr, number) {
  let newArr = [];
  let index = 0;
  while (index < arr.length) {
    newArr.push(arr.slice(index, index + number));
    index += number;
  }
  return newArr;
}
console.log(splitArr([1, 2, 3, 4, 5, 6], 3));
