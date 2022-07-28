function solve(arr) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      result = true;
    }
    if (sum < 0) {
      sum = 0;
      left = i + 1;
    }
    if (sum > 0) {
      sum = 0;
      right = i;
    }
    if (left < right) {
      result = true;
    }
  }
  return result ? "YES" : "NO";
}

console.log(solve([1, 5, 7, 2, 4]));
