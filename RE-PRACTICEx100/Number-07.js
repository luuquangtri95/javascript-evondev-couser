function isSymetricNumber(n) {
  if (!Number(n) || n < 0) return false;

  //reverse number
  const reverseNumber = n.toString().split('').map(Number).reverse().join('');

  // condition rever number equal n =>
  return reverseNumber === n ? true : false;
}

function isSymetricNumber(n) {
  if (!Number(n) || n < 0) return false;

  let remaining = n;
  let newNumber = 0;

  while (remaining > 0) {
    const lastCurrNumber = remaining % 10;
    newNumber = newNumber * 10 + lastCurrNumber;

    remaining = Math.trunc(remaining / 10);
  }

  return newNumber === n;
}

console.log(isSymetricNumber(12321));
console.log(isSymetricNumber(11));
console.log(isSymetricNumber(12345));
