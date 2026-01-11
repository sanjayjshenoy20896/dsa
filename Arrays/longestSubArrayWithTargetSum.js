
//longest subarray with target sum k(positives); -> revise
function findLengthOfSubarrayForTargetSum(arr,target){
  const n = arr.length;

   // To store the maximum length of the subarray
        let maxLen = 0;
        
        // Pointers to mark the start and end of window
        let left = 0, right = 0;
        
        // To store the sum of elements in the window
        let sum = arr[0];
        
        // Traverse all the elements
        while (right < n) {
            
            // If the sum exceeds K, shrink the window
            while (left <= right && sum > target) {
                sum -= arr[left];
                left++;
            }
            
            // Store the maximum length
            if (sum === target) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
            
            right++;
            if (right < n) sum += arr[right];
        }
        
        return maxLen;
}
// console.log(findLengthOfSubarrayForTargetSum([10,5,2,7,1,9],15));