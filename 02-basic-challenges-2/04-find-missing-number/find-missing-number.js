function findMissingNumber(arr) {
  if (arr.length == 0) return 1;
  let n = arr.length + 1;

  let sum = (n * (n + 1)) / 2;

  let ourSum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let missing = sum - ourSum;
  return missing;
}

module.exports = findMissingNumber;
