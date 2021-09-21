function isSymetricNumber(n) {
  if (!Number(n) || n < 0) return false;

  //reverse number
  const stringNumberList = n.toString().split('').reverse().join('');

  // condition rever number equal n =>
  if (stringNumberList == n) {
    return true;
  }

  return false;
}

console.log(isSymetricNumber(12321));
console.log(isSymetricNumber(11));
console.log(isSymetricNumber(12345));
