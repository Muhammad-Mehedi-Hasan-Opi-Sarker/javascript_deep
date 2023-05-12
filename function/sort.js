const arr = [6, 9, 3, 45, 8, 1, 3, 2];

arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr);
