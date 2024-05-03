function sumIntervals(intervals) {
  let ziroNumbers = 0;
  let positiveNumbers = 0n;
  let negativeNumbers = 0n;

  intervals.forEach((element) => {
    for (i = element[0]; i < element[1]; i++) {
      if (i == 0) ziroNumbers = 1;

      if (i > 0) {
        positiveNumbers = positiveNumbers | BigInt(2 ** i);
      }
      if (i < 0) {
        negativeNumbers = negativeNumbers | BigInt(2 ** -i);
      }
    }
  });
  console.log(ziroNumbers);
  console.log(positiveNumbers.toString(2));
  console.log(negativeNumbers.toString(2));
  let str = positiveNumbers.toString(2) + negativeNumbers.toString(2);

  let result = str.match(/1/gi).length + ziroNumbers;

  return result;
}
console.log(
  sumIntervals([
    [-3, 1],
    [120, 3000],
  ])
);

/* function sumIntervals(intervals) {
    let arrNumbersOne = [];
  
    intervals.forEach((element) => {
      for (i = element[0]; i < element[1]; i++) {
        arrNumbersOne[i] = 1;
      }
    });
  
    let clearSumIntervals = arrNumbersOne.filter(
      (element) => (element = 1)
    ).length;
  
    return clearSumIntervals;
  }
  console.log(
    sumIntervals([
      [3, 7],
      [10, 13],
    ])
  ); */
