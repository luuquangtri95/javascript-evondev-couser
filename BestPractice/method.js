//method

function method() {
  function findIndex(data, n) {
    if (!Array.isArray(data) || data.length === 0) return -1;

    let index = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === n) {
        return i;
      }

      index++;
    }

    return -1;
  }

  function find(data, callback) {
    if (!Array.isArray(data) || data.length === 0) return undefined;

    let firstNumberFindInData; // undefined

    for (let i = 0; i < data.length; i++) {
      if (callback(data[i])) {
        firstNumberFindInData = i;
      }
    }

    return firstNumberFindInData;
  }

  function filter(data, callback) {
    if (!Array.isArray(data) || data.length === 0) return [];

    let newArr = [];

    for (let i = 0; i < data.length; i++) {
      if (callback(data[i])) {
        newArr.push(data[i]);
      }
    }

    return newArr;
  }

  return {
    findIndex,
    find,
    filter,
  };
}

const methodListInArr = method();

console.log(methodListInArr.findIndex([1, 2, 3], 3));
console.log(methodListInArr.find([1, 2, 3], (x) => x > 5));
console.log(methodListInArr.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x % 2 !== 0));
