export function checkIfAllEvenV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  return numberList.every((number) => number % 2 === 0);
}
