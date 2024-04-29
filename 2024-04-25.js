function solution(str) {
  let result = [...str];
  if (result.length % 2 != 0) result.push("_");
  let newResult = [];

  for (i = 0; i < result.length; i++) {
    if (i % 2 == 0) {
      newResult[i / 2] = result[i];
    } else {
      newResult[(i - 1) / 2] = newResult[(i - 1) / 2] + result[i];
    }
  }

  return newResult;
}
console.log(solution("stringh"));
