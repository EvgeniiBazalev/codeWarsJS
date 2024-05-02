function tribonacci(signature, n) {
  if (n > 3) {
    for (i = 0; i < n - 3; i++) {
      signature.push(signature[i + 0] + signature[i + 1] + signature[i + 2]);
    }
  } else {
    signature.splice(n, 3 - n);
  }
  return signature;
}
console.log(tribonacci([1, 1, 1], 1));
