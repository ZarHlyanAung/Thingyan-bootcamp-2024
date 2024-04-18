function symmetricDifference(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let final = [];

  for (let each of set1) {
    if (!set2.has(each)) final.push(each);
  }
  for (let each of set2) {
    if (!set1.has(each)) final.push(each);
  }

  return final;
}

module.exports = symmetricDifference;
