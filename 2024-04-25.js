function sumIntervals(intervals) {
  console.log(`i = ${i}`);
  function clearedIntervals(intervals) {
    for (i = 0; i < intervals.length; i++) {
      for (j = 0; j < intervals.length; j++) {
        if (j == i) j = i + 1;

        console.log(`j = ${j}`);

        if (intervals[j] && intervals[i]) {
          if (
            intervals[j][0] >= intervals[i][0] &&
            intervals[i][1] >= intervals[j][1]
          ) {
            console.log("splice j");

            intervals.splice(j, 1);

            j != 0 ? j-- : null;
          } else if (
            intervals[j][0] <= intervals[i][0] &&
            intervals[i][1] <= intervals[j][1]
          ) {
            console.log("splice i");
            intervals.splice(i, 1);
            j = 0;
          }
        }
      }
    }
    return intervals;
  }

  intervals = clearedIntervals(intervals);
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  for (i = 0; i < intervals.length; i++) {
    for (j = 0; j < intervals.length; j++) {
      if (j == i) j = i + 1;

      if (intervals[j] && intervals[i]) {
        if (
          intervals[i][0] >= intervals[j][0] &&
          intervals[i][1] >= intervals[j][1] &&
          intervals[j][1] > intervals[i][0]
        ) {
          intervals[j][1] = intervals[i][0];
          j != 0 ? j-- : null;
        } else if (
          intervals[i][0] <= intervals[j][0] &&
          intervals[i][1] <= intervals[j][1] &&
          intervals[j][0] < intervals[i][1]
        ) {
          intervals[i][1] = intervals[j][0];
          j = 0;
        }
      }
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
    [12, 21],
    [19, 26],
    [15, 21],
    [10, 20],
    [16, 22],
    [3, 11],
    [-18, -11],
  ])
);
