// majority element by n/2



// complexity analysis -> Using Hashing - O(n) Time and O(n) Space
function majorityElement(arr){
    let n = arr.length;
    let numMap = new Map();
    for(let num of arr){
        numMap.set(num,(numMap.get(num)||0)+1)
        if(numMap.get(num) >n/2){
            return num;
        }
    }
    return -1;
}
console.log("majorityElemntUsingHashing")
console.log(majorityElement([1, 1, 2, 1, 3, 5, 1]))



//Using Moore's Voting Algorithm - O(n) Time and O(1) Space
function majorityElementUsingMooreVotingAlgorithm(arr){
    let candidate = -1;
    let count = 0;
    const arrLen = arr.length;
    for(let i=0;i<arrLen;i++){
        if(count ===0){
            candidate = arr[i]
            count=1
        }else if(arr[i] == candidate){
            count++
        }else{
            count--
        }
    }
    count = 0;
    for(let num of arr){
        if(candidate === num){
            count++
        }
    }
    if(count>arrLen/2){
        return candidate;
    }else{
        return -1;
    }
}
console.log("majorityElementUsingMooreVotingAlgorithm");
console.log(majorityElementUsingMooreVotingAlgorithm([1, 1, 2, 1, 3, 5, 1]))