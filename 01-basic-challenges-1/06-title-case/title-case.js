function titleCase(string) {
  let words = string.toLowerCase().split(' ');

  words = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(' ');
}

module.exports = titleCase;
