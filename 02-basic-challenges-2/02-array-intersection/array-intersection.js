function arrayIntersection(arr1, arr2) {
  let common = [];

  arr1.forEach((each) => {
    if (!common.includes(each) && arr2.includes(each)) common.push(each);
  });

  return common;
}

module.exports = arrayIntersection;
