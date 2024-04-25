function arrayDiff(a, b) {
  console.log(b);
  if (b.length != 0) {
    for (i = 0; i <= b.length; i++) {
      console.log(b);
      a = a.filter((item) => item !== b[i]);
    }
  } else {
    return a;
  }

  return a;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
