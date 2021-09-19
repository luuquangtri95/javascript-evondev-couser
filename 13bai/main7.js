function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  if (arr1.length === 0 && arr2.length === 0) return [];

  return arr1.filter((item) => arr2.includes(item));
}
console.log(intersection([1, 2, 3, 5, 7, 9], [5, 6, 7]));
