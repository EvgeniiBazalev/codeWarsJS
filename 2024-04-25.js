function solution(list) {
  let result = list[0];
  let splitter = ",";
  for (let i = 1; i < list.length; i++) {
    if (list[i - 1] + 1 == list[i] && list[i] == list[i + 1] - 1) {
      splitter = "-";
    } else {
      result += splitter + list[i];
      splitter = ",";
    }
  }

  return result;
}
console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
