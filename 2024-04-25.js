function sumIntervals(intervals) {
  function clearedIntervals(intervals) {
    for (i = 0; i < intervals.length; i++) {
      for (j = i + 1; j < intervals.length; j++) {
        if (
          intervals[j][0] >= intervals[i][0] &&
          intervals[i][1] >= intervals[j][1]
        ) {
          intervals[j][0] = 0;
          intervals[j][1] = 0;
        } else if (
          intervals[j][0] <= intervals[i][0] &&
          intervals[i][1] <= intervals[j][1]
        ) {
          intervals[i][0] = 0;
          intervals[i][1] = 0;
        }
      }
    }
    intervals = intervals.filter((item) => item[0] != item[1]);
    for (i = 0; i < intervals.length; i++) {
      for (j = i + 1; j < intervals.length; j++) {
        if (
          intervals[i][0] >= intervals[j][0] &&
          intervals[i][1] >= intervals[j][1] &&
          intervals[j][1] > intervals[i][0]
        ) {
          intervals[j][1] = intervals[i][0];
        } else if (
          intervals[i][0] <= intervals[j][0] &&
          intervals[i][1] <= intervals[j][1] &&
          intervals[j][0] < intervals[i][1]
        ) {
          intervals[i][1] = intervals[j][0];
        }
      }
    }
    for (i = 0; i < intervals.length; i++) {
      for (j = i + 1; j < intervals.length; j++) {
        if (
          intervals[i][0] >= intervals[j][0] &&
          intervals[i][1] >= intervals[j][1] &&
          intervals[j][1] > intervals[i][0]
        ) {
          intervals[j][1] = intervals[i][0];
        } else if (
          intervals[i][0] <= intervals[j][0] &&
          intervals[i][1] <= intervals[j][1] &&
          intervals[j][0] < intervals[i][1]
        ) {
          intervals[i][1] = intervals[j][0];
        }
      }
    }
  }

  clearedIntervals(intervals);

  let allIntervals = intervals.reduce((accumulator, item) => {
    return accumulator + item[1] - item[0];
  }, 0);
  console.log(allIntervals);

  return allIntervals;
}
console.log(
  sumIntervals([
    [12, 13],
    [-13, -7],
    [-3, 5],
    [3, 8],
    [-5, 4],
    [20, 28],
    [8, 15],
    [-6, 2],
    [-14, -7],
  ])
);
