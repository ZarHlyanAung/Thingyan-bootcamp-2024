function maxSubarraySum(arr, k) {
  //   console.time('started');
  let max = Number.NEGATIVE_INFINITY;

  //   console.timeEnd('started');

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    // console.time('looping parent');
    for (let j = 0; j < k; j++) {
      //   console.log(j, ' j');
      sum += arr[i + j];
    }
    if (sum > max) {
      max = sum;
    }
    // console.timeEnd('looping parent');
  }
  return max;
}

module.exports = maxSubarraySum;
