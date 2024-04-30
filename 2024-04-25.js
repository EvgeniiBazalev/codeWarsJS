function firstNonRepeatingLetter(s) {
  let splitArr = [...s];
  let splitArrLowerCase = [...s.toLowerCase()];

  let test = s.match(new RegExp(s[0], "gi"));
  console.log(test);
  let result = "";

  for (i = 0; i < splitArr.length; i++) {
    let item = splitArrLowerCase[i];
    let arrChar = splitArrLowerCase.filter((char) => char == item);

    if (arrChar.length == 1) {
      result = splitArr[i];
      i = splitArr.length;
    }
  }

  return result;
}
console.log(firstNonRepeatingLetter("moonman"));
