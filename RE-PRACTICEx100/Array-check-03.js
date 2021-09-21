function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  if (
    (wordList.includes('easy') && wordList.includes('frontend')) ||
    wordList.includes('easy frontend')
  )
    return true;

  return false;
}

console.log(hasEasyFrontend(['easy', ''])); // false
console.log(hasEasyFrontend(['easy', 'frontend'])); // true
console.log(hasEasyFrontend(['easy frontend', ''])); // true
