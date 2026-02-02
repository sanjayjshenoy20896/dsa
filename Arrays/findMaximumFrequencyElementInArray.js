function maximumFrequencyElement(arr){
  let freqMap = new Map()
  let count = 0;
  let element = "";
  for(let item of arr){
    freqMap.set(item,(freqMap.get(item) || 0)+1)
  }
  for(let [key,value] of freqMap.entries()){
    if(value>count){
      count=value;
      element = key
    }
  }
  return element;
}
console.log(maximumFrequencyElement([1,2,2,3,4,5,,5]))

/*
Time Complexity
The first for loop iterates over the array once and performs O(1) operations for each element (map access and update), so it runs in O(n) time, where n is the length of arr.
The second for loop iterates over the entries of the map, which is at most the number of unique elements, say k. So it runs in O(k) time.
Overall time complexity: O(n + k), which simplifies to O(n) since k <= n.

Space Complexity
The frequency map stores counts for each unique element, so it requires O(k) space, where k is the number of unique elements.
Other variables use constant space.
Overall space complexity: O(k)
*/