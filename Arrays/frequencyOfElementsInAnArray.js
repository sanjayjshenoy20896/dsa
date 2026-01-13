// sort characters by frequency
function sortCharactersByFrequency(str){
    const charFrequency = new Map();   
    for(let char of str){
        charFrequency.set(char,(charFrequency.get(char)| 0)+1)
    }
    const sortedCharacters = [...charFrequency.entries()].sort((a,b)=> b[1]-a[1]);
    let result ="";
    let results = []
    for(const [char,freq] of sortedCharacters){
        results.push({
            character:char,
            count:freq
        })
        result+=char.repeat(freq)
    }
    return {result,results};
}
/**
 * Complexity analysis:
 * time complexity of O(n) and a space complexity of O(k)
 */
// console.log(sortCharactersByFrequency("tree"))