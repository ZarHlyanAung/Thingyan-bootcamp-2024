function findMaxNumber(array) {
  let max = array[0];
  array.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

module.exports = findMaxNumber;
