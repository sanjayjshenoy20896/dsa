/**
 * Time & Space Complexity

Time: O(n log n) (sorting)

Space: O(1) (in-place sort)
 */

function maxSumAfterRemovingK(arr, n, k) {
  if (k >= n) return 0;

  // Sort ascending
  arr.sort((a, b) => a - b);

  let sum = 0;
  for (let i = k; i < n; i++) {
    sum += arr[i];
  }

  return sum;
}
const arr = [1, 2, 3, 4, 5];
const n = arr.length;
const k = 2;

console.log(maxSumAfterRemovingK(arr, n, k));