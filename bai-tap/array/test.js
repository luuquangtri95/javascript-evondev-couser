function isSymetricNumber(n) {
  if (n < 0) return false;

  let remaining = n;
  let newNumber = 0;

  while (remaining > 0) {
    const currentNumber = remaining % 10;
    newNumber = newNumber * 10 + currentNumber;

    remaining = Math.trunc(remaining / 10);
  }

  return newNumber === n;
}

console.log(isSymetricNumber(123));

/**
 * 123
 * 123 % 10 = 3 => chia lấy dư
 * 123 / 10 = 12.... =>> chia lấy nguyên
 */
