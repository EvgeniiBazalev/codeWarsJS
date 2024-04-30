function deleteNth(arr, n) {
  let statistic = {};
  let clearedArr = [];

  arr.forEach((item) => {
    if (statistic[item]) {
      statistic[item]++;
    } else {
      statistic[item] = 1;
    }

    if (statistic[item] <= n) clearedArr.push(item);
  });

  return clearedArr;
}
console.log(deleteNth([20, 37, 20, 21], 1));
