function narcissistic(value) {
  let arrDigits = [...String(value)].map((item) => +item);
  let raisedArr = arrDigits.map((item) => item ** arrDigits.length);
  console.log(raisedArr);

  let sumRaisedArr = raisedArr.reduce(function (accumulator, item) {
    return accumulator + item;
  }, 0);

  if (sumRaisedArr == value) {
    return true;
  } else {
    return false;
  }
}

console.log(narcissistic(137));
