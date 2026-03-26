// console.log("Hello, World!");

/*
Count pairs (x, y) where:

𝑥
𝑦
>
𝑦
𝑥
x
y
>y
x

X and Y: arrays of positive integers

Naive O(n²) → TLE
*/

const X = [2, 1, 6];
const Y = [1, 5];
function countPairs(X, Y) {
  const n = Y.length;
  
  // Count occurrences of 0,1,2,3,4 in Y
  const countY = Array(5).fill(0);
  for (let y of Y) {
    if (y < 5) countY[y]++;
  }

  // Sort Y for binary search
  const sortedY = [...Y].sort((a, b) => a - b);

  // Binary search helper: find first index with value > x
  function upperBound(arr, x) {
    let left = 0, right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] <= x) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  let totalPairs = 0;

  for (let x of X) {
    if (x === 0) continue; // 0^y = 0, never > y^0
    if (x === 1) {
      totalPairs += countY[0]; // Only y=0 works
      continue;
    }

    // Find number of y > x
    let idx = upperBound(sortedY, x);
    let count = n - idx;

    // Add special cases
    count += countY[0] + countY[1]; // y=0 or y=1 always work for x>1

    if (x === 2) {
      // subtract y=3,4 (2^3 < 3^2, 2^4 < 4^2)
      count -= countY[3] + countY[4];
    }
    if (x === 3) {
      // add y=2 (3^2 > 2^3)
      count += countY[2];
    }

    totalPairs += count;
  }

  return totalPairs;
}
console.log(countPairs(X, Y)); // Output: 3
