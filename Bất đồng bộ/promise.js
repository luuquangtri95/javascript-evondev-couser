const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));

const promise = new Promise((resolve, reject) => {
  reject(new Error('Oops, something was wrong'));
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));

//promise chaining

Promise.resolve(5)
  .then((n) => n * 2)
  .then((n) => Promise.resolve(n * 2))
  .then((n) => {
    const finalNumber = n + 10;
    console.log(finalNumber);
    return finalNumber;
  })
  .catch((error) => console.log(error));
