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
export function classifyStudentV3(mark) {
  if (!Number(mark) || mark < 0 || mark > 10) return 'giá trị không hợp lệ';

  if (mark > 8) return 'exellence';
  if (mark >= 7) return 'good';
  if (mark >= 4) return 'not good';

  return 'bad';
}
