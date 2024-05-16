let variables = {
  1: [1, 2, 4],
  2: [2, 1, 3, 5],
  3: [3, 2, 6],
  4: [4, 1, 5, 7],
  5: [5, 2, 4, 6, 8],
  6: [6, 3, 5, 9],
  7: [7, 4, 8],
  8: [8, 5, 7, 9, 0],
  9: [9, 6, 8],
  0: [0, 8],
};

function getPINs(observed) {
  observed = observed.toString();

  let result = [];

  function pushInResult(string, comboRes) {
    for (let i = 0; i < string.length; i++) {
      let combination = comboRes;
      if (string.length > 1) {
        pushInResult(string.slice(1), combination);
      } else {
        for (let j = 0; j < variables[observed[i]].length; j++) {
          result.push(combination + variables[observed[i]][j]);
        }
      }
    }
  }

  pushInResult(observed, "");

  return result;
}

console.log(getPINs(123));
/* 
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘ */
