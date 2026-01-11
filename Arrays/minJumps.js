

//bruteforce approach:
function performMinJumps(arr){
    // if the value at the first element is 0, then return 0. will not be able to proceed furthur
    if(arr[0] === 0){
        return -1
    }

    let ans = minJumpsRecur(0, arr);
    
    // If end cannot be reached.
    if (ans == Infinity) 
        return -1;
        
    return ans;
}

function minJumpsRecur(i,arr){
    // return 0 if when last element is reached
    if(i>=arr.length -1){
        return 0;
    }
    // Traverse through all the points
    // reachable from arr[i].
    // Recursively, get the minimum number
    // of jumps needed to reach array end from
    // these points.
    let ans = Infinity;
    for (let j = i + 1; j <= i + arr[i]; j++) {
        let val = minJumpsRecur(j, arr);
        if (val != Infinity)
            ans = Math.min(ans, 1 + val);
    }

    return ans;
}
//complexity: Time: O(n ^ n) Space: O(N)
console.log("bruteforce");
console.log(performMinJumps([0,1,2]));
console.log(performMinJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))


