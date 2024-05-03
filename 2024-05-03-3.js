function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  intervals = intervals.filter((item) => item[0] != item[1]);
  console.log(intervals);
  for (i = 0; i < intervals.length; i++) {
    if (
      intervals[i + 1] &&
      intervals[i + 1][0] >= intervals[i][0] &&
      intervals[i + 1][1] <= intervals[i][1]
    ) {
      intervals.splice(i + 1, 1);
      i--;
      continue;
    }

    if (intervals[i + 1] && intervals[i][1] > intervals[i + 1][0]) {
      intervals[i][1] = intervals[i + 1][0];
    }
    if (intervals[i + 1] && intervals[i][1] > intervals[i + 1][1]) {
      intervals[i + 1][1] = intervals[i + 1][0];
    }
  }

  console.log(intervals);

  let allIntervals = intervals.reduce((accumulator, item) => {
    return accumulator + item[1] - item[0];
  }, 0);

  return allIntervals;
}
console.log(
  sumIntervals([
    [1, 20],
    [2, 19],
    [5, 15],
    [8, 12],
  ])
);
/* console.log(
    sumIntervals([
      [1, 20],
      [2, 19],
      [5, 15],
      [8, 12],
    ])
  ); */
