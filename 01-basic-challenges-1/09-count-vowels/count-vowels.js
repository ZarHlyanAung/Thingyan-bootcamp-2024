function countVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  string.split('').forEach((element) => {
    if (vowels.includes(element)) {
      count++;
    }
  });

  return count;
}

module.exports = countVowels;
