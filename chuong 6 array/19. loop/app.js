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
