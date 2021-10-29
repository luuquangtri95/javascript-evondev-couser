function createCounter() {
  let temp = 0;

  function count(label = 'default') {
    if (label) {
      value = label;
      temp++;
    }

    return `${label}: ${temp}`;
  }

  function resetCount(label = 'default') {
    if (label === value) {
      temp = 0;
    }

    return temp;
  }

  return {
    count,
    resetCount,
  };
}

const counter = createCounter();

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

console.log(counter.resetCount());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
