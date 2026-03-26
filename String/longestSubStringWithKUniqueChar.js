function lengthOfLongestSubstringKDistinct(s, k) {
  if (k === 0 || s.length === 0) return 0;

  let left = 0;
  let maxLen = 0;
  const charCount = new Map(); // track frequency of chars in current window

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    charCount.set(char, (charCount.get(char) || 0) + 1);

    // shrink window if more than k distinct characters
    while (charCount.size > k) {
      const leftChar = s[left];
      charCount.set(leftChar, charCount.get(leftChar) - 1);
      if (charCount.get(leftChar) === 0) {
        charCount.delete(leftChar);
      }
      left++;
    }

    // update max length
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3 ("ece")
console.log(lengthOfLongestSubstringKDistinct("aa", 1));    // 2 ("aa")
console.log(lengthOfLongestSubstringKDistinct("abcadcacacaca", 3)); // 11 ("cadcacacaca")
