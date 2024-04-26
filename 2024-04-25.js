function isValidWalk(walk) {
  //insert brilliant code here

  let N = walk.filter((item) => item == "n").length;
  let S = walk.filter((item) => item == "s").length;
  let W = walk.filter((item) => item == "w").length;
  let E = walk.filter((item) => item == "e").length;

  if ((N == S) & (W == E) & (N + S + W + E == 10)) return true;

  return false;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
