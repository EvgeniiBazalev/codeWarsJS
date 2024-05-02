function pickPeaks(arr) {
  let result = { pos: [], peaks: [] };
  let candidate = null;
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] - arr[i - 1] > 0) {
      candidate = { pos: i, peaks: arr[i] };
    }

    if (candidate && arr[i] - arr[i - 1] < 0) {
      result.pos.push(candidate.pos);
      result.peaks.push(candidate.peaks);
      candidate = null;
    }
  }

  return result;
}

console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
