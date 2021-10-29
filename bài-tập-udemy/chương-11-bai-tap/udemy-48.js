// fix

function createRandomColorFn(colorList) {
  if (!Array.isArray(colorList)) throw new Error('colorList should be an array');
  if (colorList.length === 0) throw new Error('colorList should not be empty');
  if (colorList.length === 1) throw new Error('colorList should have more than one item');

  let index; // red | 0

  function randomColor() {
    let randomIndex = Math.trunc(Math.random() * colorList.length);

    while (index === randomIndex) {
      randomIndex = Math.trunc(Math.random() * colorList.length);
    }

    index = randomIndex;

    return colorList[randomIndex];
  }

  return randomColor;
}

const colorList = ['red', 'green', 'yellow'];

const randomColor = createRandomColorFn(colorList);
const currentColor = randomColor(); //red
const nextColor = randomColor();

console.log(currentColor);
console.log(nextColor);
