
function findSubArrayWithGivenSumFromArrayBruteforce(arr,k){
    for(let i=0;i<arr.length;i++){
        let currentSum = 0;
        for(let j=i;j<arr.length;j++){
            currentSum+=arr[j]
            if(currentSum ===k){
                return arr.slice(i,j+1)
            }
        }
    }
}

console.log(findSubArrayWithGivenSumFromArrayBruteforce([2, 12, -2, -20, 10],-10))


function findSubArrayWithGivenSumFromArrayOptimal(arr,k){
    let currentSum = 0;
    let start = 0;
    let end = 1;
    let hash = new Map();
    for(let i=0;i<arr.length;i++){
        currentSum+=arr[i];
        if(currentSum - k === 0){
            start = 0;
            end = i
            break;
        }
        if(hash.has(currentSum-k)){
            start = hash.get(currentSum-k) + 1;
            end = i;
            break;
        }
        hash.set(currentSum,i)
    }
    return arr.slice(start,end+1)
}
console.log(findSubArrayWithGivenSumFromArrayOptimal([2, 12, -2, -20, 10],-10))