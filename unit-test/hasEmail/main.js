export function hasEmail(str) {
  if (str === '') return '';

  return str.includes('@gmail.com');
}
