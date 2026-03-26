/**
 * Given an integer array nums and an integer k, return the kth smallest distance among all pairs (nums[i], nums[j]) where i < j.

The distance of a pair (a, b) is |a - b|.

Constraints:

2 ≤ nums.length ≤ 10⁴

0 ≤ nums[i] ≤ 10⁶

1 ≤ k ≤ nums.length * (nums.length - 1) / 2
 */

function smallestDistancePair(nums, k) {
  nums.sort((a, b) => a - b); // sort the array

  const n = nums.length;

  // helper: count pairs with distance <= guess
  function countPairs(mid) {
    let count = 0;
    let left = 0;
    for (let right = 0; right < n; right++) {
      while (nums[right] - nums[left] > mid) left++;
      count += right - left;
    }
    return count;
  }

  let low = 0;
  let high = nums[n - 1] - nums[0];

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (countPairs(mid) < k) low = mid + 1;
    else high = mid;
  }

  return low;
}
console.log(smallestDistancePair([1,3,1], 1)); // 0
console.log(smallestDistancePair([1,6,1,2], 3)); // 2
