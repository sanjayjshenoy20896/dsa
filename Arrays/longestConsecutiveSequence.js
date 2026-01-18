// longest consecutive subsequence

// complexity -> Time: O(N log N) Space O(1)
function findLongestConsecutiveSubSequence(arr){
    let n  = arr.length;
    if(n === 0){
        return 0;
    }
    let len = 0;
    arr.sort((a,b)=>a-b);
    let lastSmaller = -Infinity;

    let largest = 1;
    for(let i=0;i<n;i++){
        let currentElement = arr[i];
        if(currentElement - 1 === lastSmaller){
            len+=1
            lastSmaller = currentElement;
        }else{
            len =1;
            lastSmaller = currentElement;
        }
        largest = Math.max(largest,len);
    }
    return largest;
}

console.log(findLongestConsecutiveSubSequence([1,100,101,2,3]))


//optimal solution
function findLongestConsecutiveSubSequenceOptimal(arr){
    let n = arr.length;
    // if length of array is eual to zero, there are no consecutive sub sequence of nos
    if(n===0) return 0;
    let cnt = 0;
    let longest  = -Infinity
    let set = new Set();
    
    // Put all the array elements into the set
    for(let i=0;i<n;i++){
        set.add(arr[i]);
    }
    // Traverse the set to find the longest sequence
    for(let it of set){
        // Check if 'it' is a starting number of a sequence
        if(!set.has(it -1)){
             // Initialize the count of the current sequence
                let cnt = 1; 
                // Starting element of the sequence
                let x = it;
                
                // Find consecutive numbers in the set
                while(set.has(x+1)){
                    // Move to the next element in the sequence
                    x = x + 1; 
                    // Increment the count of the sequence
                    cnt = cnt + 1; 
                }
                // Update the longest sequence length
                longest = Math.max(longest, cnt);
        }
    }
    return longest
}

console.log(findLongestConsecutiveSubSequenceOptimal([1,100,101,2,3]))
