function wordFrequencyCounter(string) {
  let countMap = new Map([]);
  if (!string) return countMap;

  let words = string
    .toLowerCase()
    .replace(/[!-\/:-@\[-\`{-~]/g, '')
    .split(' ');

  words.forEach((word, index) => {
    if (countMap.has(word)) {
      let updated = countMap.get(word) + 1;
      countMap.set(word, updated);
    } else {
      countMap.set(word, 1);
    }
  });

  return countMap;
}

module.exports = wordFrequencyCounter;
