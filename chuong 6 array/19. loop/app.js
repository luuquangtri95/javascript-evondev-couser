// vòng lập là gì ?

const number = [1, 2, 3, 4, 5];
/**
 * for(let i = 0; i < number.length; i++){
 *  processing
 * }
 */

for (let i = 0; i < number.length; i++) {
  // console.log(i);
  console.log(number[i]);
  if (number[i] === 3) {
    break; //dung vong lap
  }
  console.log(number[i]);
  //if gia tri bang 3 thi tiep tuc
  if (number[i] === 3) {
    continue; //tiep tuc vong lap
  }
}
const number = [1, 2, 3, 4, 5];
for (let i = number.length - 1; i >= 0; i--) {
  console.log(`the value ${number[i]}`);
  for (let j = number.length - 1; j >= 0; j--) {
    console.log(number[j]);
  }
}

// duyệt mảng của array =>> Hậu nguyễn
/**
 * trước ES5: for... i
 * ES5: foreach
 * ES6: for of
 */

// before es5 for...i
const numberList = [2, 3, 4];
for (let i = 0; i < numberList.length; i++) {
  const number = numberList[i];
  console.log(number);
}

// ES5
const numberList = [2, 3, 4];
numberList.forEach((item) => console.log(item));

//ES6
const numberList = [2, 3, 4];
for (number of numberList) {
  console.log(number);
}

/**
 * cách dùng:
 * cần loop 1 độ dài tuỳ ý, hoặc j đó tuỳ ý, hoặc chạy trong khoảng cần muốn chạy: for...i
 * cần lấy index: foreach
 * chỉ lấy value không cần index: for of (sẽ k lấy được index)
 */
