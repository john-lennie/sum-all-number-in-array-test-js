function sumItems(array) {
  // if () return; // termination case

  let sum = 0;

  for (var item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

module.exports = sumItems;
