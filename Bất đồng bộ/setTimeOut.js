setTimeout(() => {
  console.log('hi');
}, 1000);

console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);

// clear time out

const timeoutId = setTimeout(() => {
  window.location.href = 'https://google.com';
}, 3000);

// clear
clearTimeout(timeoutId);

// ! late timeout
