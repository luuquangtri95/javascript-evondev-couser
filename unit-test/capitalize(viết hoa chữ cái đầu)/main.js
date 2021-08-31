export function capitalize(str) {
  // checking
  if (str === '' || !String(str)) return '';
  //processing
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}
