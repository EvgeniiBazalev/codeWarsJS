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

  function pushInResult(string) {
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < variables[string[i]].length; j++) {
        if (string.length > 1 && string[i + 1]) {
          let combo1 = variables[string[i]][j].toString();
          for (let k = 0; k < variables[string[i + 1]].length; k++) {
            let combo2 = combo1 + variables[string[i + 1]][k].toString();

            result.push(combo2);
          }
        } else {
          result.push(variables[string[i]][j]);
        }
      }
    }
  }

  pushInResult(observed);

  return result;
}

console.log(getPINs(12));
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
