function createStack() {
  const stack = [];

  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }

  function getSize() {
    return stack.length;
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function push(data) {
    stack.push(data);
  }

  function pop() {
    return stack.pop();
  }

  function print() {
    return stack;
  }

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}

const stack = createStack();

function isValidBracketPairs(str) {
  if (str.length === 0) return true;

  const BRACKETS_OPEN = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const BRACKETS_CLOSE = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];

    if (BRACKETS_OPEN[bracket]) {
      stack.push(BRACKETS_OPEN[bracket]);
    }

    if (BRACKETS_CLOSE[bracket]) {
      console.log(BRACKETS_CLOSE[bracket]);
      const bracketClose = stack.pop();
      if (bracket !== bracketClose) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(isValidBracketPairs('(a + b) * c[1'));
console.log(isValidBracketPairs('(a + b) * (c + d)'));
