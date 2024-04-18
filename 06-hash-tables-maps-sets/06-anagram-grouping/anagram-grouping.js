function anagramGrouping(arr) {
  let map = new Map([]);

  arr.forEach((string, index) => {
    let key = string.split('').sort().join('');

    if (map.has(key)) {
      let value = map.get(key);
      console.log(value, 'existed key');
      value.push(string);
      map.set(key, value);
    } else {
      let value = [string];

      map.set(key, value);
      console.log(map);
    }
  });

  return Array.from(map.values());
}

module.exports = anagramGrouping;
