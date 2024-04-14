function removeDuplicates(arr) {
  let uniques = [];

  arr.forEach((element) => {
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  });

  return uniques;
}

module.exports = removeDuplicates;
