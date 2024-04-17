function reverseString(string) {
  if (string.length == 0) {
    console.log('all empty');
    return string;
  }

  let trimmedString = string.slice(0, string.length - 1);
  let lastLetter = string.slice(-1);

  console.log(lastLetter, 'last letter');

  let result = lastLetter + reverseString(trimmedString);

  console.log(result, '<= result');
  return result;
}

module.exports = reverseString;
