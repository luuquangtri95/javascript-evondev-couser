/**
 * hạn chế sử dụng if else, if else if...
 * nên sử dụng if return
 * check điều kiện sai trước
 */

// ví dụ: logic khó (không nên viết) tìm cách khử else if đi
function check() {
  if (condition) {
    doSomething();
  } else if (anotherCondition) {
    doSomethingElse();
  } else {
    doSomethingFinaly();
  }
}

// kiểm tra số dương chẵn

//cờ hiệu
function isPositiveNumber(n) {
  if (!Number(n)) return false;

  let isValid; //undefined
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

function isPositiveNumberV1(n) {
  if (!Number(n)) return false;

  let isValid = false; //false
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

function isPositiveNumberV2(n) {
  if (!Number(n)) return false;

  if (n > 0 && n % 2 === 0) {
    return true; //break điều kiện nếu đúng
  }

  return false;
}

function isPositiveNumberV3(n) {
  if (!Number(n)) return false;
  return n > 0 && n % 2 === 0;
}

function isPositiveNumberV5(n) {
  if (!Number(n)) return false;

  if (n > 0 && n % 2 === 0) return true;

  return false;
}

/**
 * viết 1 function xếp loại hoc sinh
 * mark > 8 :exelences
 * 7 <= mar <= 8
 * 4 <= mar <= 6
 * mark < 4
 */

// kỹ thuật lính canh
function classifyStudentV1(mark) {
  if (!Number(mark)) return false;
  let temp;

  // checking
  if (mark > 8) temp = 'excelence';
  else if (mark >= 7) temp = 'good';
  // (cái else này chắc chắn bé hơn hoặc bằng 8), check điều kiện nếu mark >= 7
  else if (mark >= 4) temp = 'not good';
  // (cái else này chắc chắn bé hơn hoặc bằng 7), check điều kiện nếu mark >= 4
  else temp = 'bad';
  // (else còn lại chắc chắn < 4)
  return temp;
}

function classifyStudentV2(mark) {
  if (!Number(mark) || mark < 0 || mark > 10) return 'giá trị không hợp lệ';
  let temp = 'bad';

  // checking
  if (mark > 8) temp = 'excelence';
  else if (mark >= 7) temp = 'good';
  // (cái else này chắc chắn bé hơn hoặc bằng 8), check điều kiện nếu mark >= 7
  else if (mark >= 4) temp = 'not good';
  // (cái else này chắc chắn bé hơn hoặc bằng 7), check điều kiện nếu mark >= 4

  return temp;
}
console.log(classifyStudentV2(-1));

// use if - return (******* nên dùng *******)
function classifyStudentV3(mark) {
  if (!Number(mark) || mark < 0 || mark > 10) return 'giá trị không hợp lệ';

  if (mark > 8) return 'excelence';
  if (mark >= 7) return 'good';
  if (mark >= 4) return 'not good';

  return 'bad';
}
