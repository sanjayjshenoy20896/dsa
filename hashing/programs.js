/***
 * Hashing programs
 */

// count the freuency of each element  from an array
function charFrequency(arr) {
    const frequency = {};
    arr.forEach(char=>{
        frequency[char] = (frequency[char] || 0) + 1;
    })
    return frequency;
}
// console.log(charFrequency(['a', 'b', 'a', 'c', 'b', 'a'])); // { a: 3, b: 2, c: 1 }

// get the highest frequency element and lowest frequency element from an array
function highestAndLowestFrequency(arr) {
    const frequency = new Map();
    arr.forEach(char=>{
        frequency.set(char, (frequency.get(char) || 0) + 1);
    })
    let maxFreq = 0, minFreq = arr.length;
    let maxEle = 0, minEle = 0;
    for (let [element, count] of frequency.entries()) {
            if (count > maxFreq) {
                maxFreq = count;
                maxEle = element;
            }

            if (count < minFreq) {
                minFreq = count;
                minEle = element;
            }
    }
    return {
        maxEle,
        minEle
    }

}
console.log(highestAndLowestFrequency(['a', 'b', 'a', 'c', 'b', 'a', 'd', 'e', 'e'])); // { maxEle: 'a', minEle: 'c' }