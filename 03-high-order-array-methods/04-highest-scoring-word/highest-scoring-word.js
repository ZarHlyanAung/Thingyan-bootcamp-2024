function highestScoringWord(sentence) {
  const words = sentence.split(' ');

  const codes = words.map((word) => {
    const totalValueOfWord = word
      .split('')
      .reduce((total, num) => total + (num.charCodeAt(0) - 96), 0);

    return totalValueOfWord;
  });

  console.log(codes);

  let index = codes.indexOf(Math.max(...codes));

  //   console.log(index);

  let maxWord = words[index];

  console.log(maxWord, 'word Max');

  return maxWord;
}

module.exports = highestScoringWord;
