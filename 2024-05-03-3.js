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

  function pushInResult(string, current) {
    for (let j = 0; j < variables[string[0]].length; j++) {
      let newCurrent = current + variables[string[0]][j].toString();

      if (string.length > 1) {
        pushInResult(string.slice(1), newCurrent);
      } else {
        result.push(newCurrent);
      }
    }
  }

  pushInResult(observed, "");
  return result;
}

console.log(getPINs(369));
/* "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"] */
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
