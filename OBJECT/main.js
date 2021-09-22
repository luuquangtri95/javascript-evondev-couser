/**
 * nếu không tìm thấy key thì return về undefined
 */

const student = {
  id: 1,
  name: 'Quang Tri',
  isHero: true,
};

console.log(student['abc']); /// không tìm thấy key return  "undefined"

const keyList = Object.keys(student); // ["id", "name","isHero"]

for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];

  console.log('key', key); // id, name, isHero
  console.log('value', student[key]); // 1, "Quang Tri" , true
}

// duyệt key bằng for in (nên sử dụng)

for (let key in student) {
  console.log('key', key); // id, name, isHero
  console.log('value', student[key]); // 1, "Quang Tri" , true
}

//=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * 1 số bài tập nhỏ về obj
 * get average mark of an object
 */

function calcAvgMark(obj) {
  let length = Object.keys(obj).length;
  let sum = 0;

  for (let key in obj) {
    const value = obj[key];
    sum += value;
  }

  return (sum / length).toFixed(1);
}

console.log(calcAvgMark({ math: 10, eng: 7 }));
