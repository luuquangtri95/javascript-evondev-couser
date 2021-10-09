// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
  if (amount % BASE_UNIT !== 0) return '';

  let remaining = amount;
  let obj = {};

  //500k
  let quantity500k = Math.trunc(remaining / K500_VALUE); //4
  if (quantity500k >= K500_QUANTITY) {
    quantity500k = K500_QUANTITY; // 2
  }
  obj.k500 = quantity500k;
  remaining = remaining - obj.k500 * K500_VALUE;

  //200k
  let quantity200k = Math.trunc(remaining / K200_VALUE);
  if (quantity200k >= K200_QUANTITY) {
    quantity200k = K200_QUANTITY;
  }
  obj.k200 = quantity200k;
  remaining = remaining - obj.k200 * K200_VALUE;

  //100k
  let quantity100k = Math.trunc(remaining / K100_VALUE);
  if (quantity100k >= K100_QUANTITY) {
    quantity100k = K100_QUANTITY;
  }
  obj.k100 = quantity100k;
  remaining = remaining - obj.k100 * K100_VALUE;

  //50k
  let quantity50k = Math.trunc(remaining / K50_VALUE);
  if (quantity50k >= K100_QUANTITY) {
    quantity50k = K100_QUANTITY;
  }
  obj.k50 = quantity50k;
  remaining = remaining - obj.k50 * K50_VALUE;

  return obj;
}

console.log(withdraw(850000));


