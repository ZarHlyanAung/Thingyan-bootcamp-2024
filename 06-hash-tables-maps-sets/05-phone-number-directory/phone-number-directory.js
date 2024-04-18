function phoneNumberDirectory(arr) {
  let dir = new Map([]);

  arr.forEach((each) => {
    let entity = each.split(':');

    dir.set(entity[0], entity[1]);
  });
  return dir;
}

module.exports = phoneNumberDirectory;
