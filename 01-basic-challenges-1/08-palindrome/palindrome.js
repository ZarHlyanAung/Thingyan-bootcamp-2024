function isPalindrome(string) {
  let formattedString = removeTawtar(string);
  console.log(formattedString);
  let reversed = string.split('').reverse().join('');

  return formattedString === reversed;
}

function isAplhaNumeric(char) {
  let code = char.charCodeAt(0);

  return (code >= 48 && code < 58) || (code >= 97 && code <= 122);
}

function removeTawtar(string) {
  return string
    .split('')
    .filter((each) => {
      isAplhaNumeric(each);
    })
    .join('');
}

module.exports = isPalindrome;
