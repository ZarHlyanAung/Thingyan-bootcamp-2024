function findMissingLetter(letterArr) {
  let codeArr = letterArr.map((letter) => {
    return letter.charCodeAt(0);
  });

  let missingCode = codeArr[0];

  codeArr.forEach((each, index) => {
    if(!(each - missingCode) == 1) missingCode =
  });

  console.log(missingCode);

  return String.fromCharCode(missingCode);
}

module.exports = findMissingLetter;
