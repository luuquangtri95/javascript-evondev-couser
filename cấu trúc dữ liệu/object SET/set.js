function getUniqueWords(sentence) {
  if (sentence.length === 0) return [];

  const sentenceList = sentence
    .trim()
    .split(' ')
    .filter((x) => x !== ' ');

  const uniqueWord = new Set(sentenceList);

  return [...uniqueWord].join(' ');
}

console.log(getUniqueWords('frontend is easy but easy to die'));
