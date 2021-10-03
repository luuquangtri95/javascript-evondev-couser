function isStrongPassword(password) {
  if (!String(password) || password.length === 0) return false;

  let symbolArr = Array.from('!@#%^&*()');

  let arrPass = Array.from(password);

  if (
    password.length <= 8 ||
    arrPass.some((item) => item.includes(item.toUpperCase())) ||
    arrPass.some((item) => item.includes(item.toLowerCase())) ||
    arrPass.includes([...symbolArr])
  ) {
    return true;
  }

  return false;
}

console.log(isStrongPassword(''));
console.log(isStrongPassword('super strong'));
console.log(isStrongPassword('Sup3rC0o!'));
