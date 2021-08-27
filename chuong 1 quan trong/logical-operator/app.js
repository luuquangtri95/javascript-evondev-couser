/**
 * nếu là số dương thì...
 * nếu là số dương chẵn thì...
 * nếu là số dương chẵn và lớn hơn 10 thì...
 * nếu là số dương chẵn, lớn hơn 5, chia hết cho 2 thì...
 * ...
 */

// 3 logical cơ bản: AND, OR, NOT

/**
 * && AND
 * || OR
 * ! NOT
 * !! NOT NOT
 */

/**
 * AND table   A && B
 * true true   true
 * true false  false
 * false true  false
 * false false false
 */

/**
 * OR table    A || B
 * true true   true
 * false true  true
 * true false  true
 * false false false
 */

/**
 * NOT table =>> prefer Boolean(A) === !!A
 * A      !A      !!A
 * true   false   true
 * false  true    false
 */

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * nếu là số dương thì...
 * nếu là số dương chẵn thì...
 * nếu là số dương chẵn và lớn hơn 10 thì...
 * nếu là số dương chẵn, lớn hơn 5, chia hết cho 2 thì...
 * ...
 */

//  nếu là số dương thì...
function checkNumber(n) {
  if (n > 0) {
  }
}

// nếu là số dương chẵn thì...
function checkNumber(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

//nếu là số dương chẵn và lớn hơn 10 thì...
function checkNumber(n) {
  if (n > 0 && n > 10) {
  }
}

//nếu là số dương chẵn, lớn hơn 5, chia hết cho 2 thì...
function checkNumber(n) {
  if (n > 0 && n > 0 && n % 2 === 0) {
  }
}

// nếu số dương chẵn hoặc âm lẻ thì...
function checkNumber(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || isOddNegative) {
    //do something
  }
}
