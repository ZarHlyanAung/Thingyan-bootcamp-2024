function displayLikes(nameArr) {
  let length = nameArr.length;
  if (length >= 4) {
    return `${nameArr[0]}, ${nameArr[1]} and ${
      nameArr.length - 2
    } others like this`;
  } else if (length === 3) {
    return `${nameArr[0]}, ${nameArr[1]} and ${nameArr[2]} like this`;
  } else if (length === 2) {
    return `${nameArr[0]} and ${nameArr[1]} like this`;
  } else if (length === 1) {
    return `${nameArr[0]} likes this`;
  } else {
    return 'no one likes this';
  }
}

module.exports = displayLikes;
