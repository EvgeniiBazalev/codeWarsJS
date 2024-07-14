const snail = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[0][i]);
  }

  for (let i = 1; i < array.length; i++) {
    result.push(array[i][array.length - 1]);
  }

  for (let i = array.length - 1; i < array.length; i++) {
    result.push(array[i][array.length - 1]);
  }

  return result;
};

let array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

console.log(snail(array));
