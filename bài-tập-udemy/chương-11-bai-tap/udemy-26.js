function isStrongPassword(password) {
  if (
    checkWords(password) &&
    checkOneWordUpperCaseAtLeast(password) &&
    checkOneWordLowerCaseAtLeast(password) &&
    checkNumberAtLeast(password) &&
    checkSpecialCharacters(password)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkWords(password) {
  if (password.length >= 8) {
    return true;
  }
  return false;
}

function checkOneWordUpperCaseAtLeast(password) {
  return password.split('').some((character) => character.toUpperCase());
}

function checkOneWordLowerCaseAtLeast(password) {
  return password.split('').some((character) => character.toLowerCase());
}

function checkNumberAtLeast(password) {
  return password.split('').some((character) => Number(character));
}

function checkSpecialCharacters(password) {
  let specialCharacter = '!@#$%^&*()';

  return password.split('').some((character) => specialCharacter.includes(character));
}

console.log(checkWords('Sup3rC0o!'));
// console.log(checkOneWordUpperCaseAtLeast('Sup3rC0o!'));
