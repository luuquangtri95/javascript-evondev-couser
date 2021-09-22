function isDre(n) {
  let remaining = n;
  while (remaining >= 10) {
    let currNumber = remaining % 10; // 1

    remaining = Math.trunc(remaining / 10); // 1232

    let remainingNumber = remaining % 10; // 2

    if (currNumber > remainingNumber) return false;
  }

  return true;
}

console.log(isDre(123));
console.log(isDre(321));
console.log(isDre(12321));

/**
 * 121
 * 0:
 * currNumber = 121 % 10 = 12.1 dư 1
 * remaining = 121 / 10 = 12
 *
 * 1:
 * currNumber = 12 % 10 = 1.2 dư 2
 * remaining = 12 / 10 = 1
 *
 * 2:
 * currNumber = 1 % 10 = 1;
 * remaining = 1 / 10 = 0;
 *
 * end loop
 *
 */
