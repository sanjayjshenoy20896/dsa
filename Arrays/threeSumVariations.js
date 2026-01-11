// 3 sum problem -> tripplet sum with zero

// bruteforce approach -> Time complexity: O(N3) , Space complexity: O(2N)
function threeSumApproachToZero(nums){
    const store = new Set();
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    let temp = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b);
                    store.add(JSON.stringify(temp));
                }
            }
        }
    }
    let ans = Array.from(store).map((triplet)=> JSON.parse(triplet));
    return ans;
}

// console.log(threeSumApproachToZero([-1,0,1,2,-1,-4]));

// optimal approach:
// using hash and sort
// time complexity: O(N2) , Space complexity: O(2N + N)
function threeSumOptimalApproach(nums){
    let finalResult = new Set();
    
    for(let i=0;i<nums.length;i++){
        let hashSet  = new Set();
        for(let j=i+1;j<nums.length;j++){
            let complement = -(nums[i]+nums[j]);
            if(hashSet.has(complement)){
                let triplet = [nums[i],nums[j],complement].sort((a,b)=>a-b);
                finalResult.add(JSON.stringify(triplet));
            }
            hashSet.add(nums[j])
        }
    }
    return Array.from(finalResult).map(str => JSON.parse(str));
}

// console.log(threeSumOptimalApproach([-1,0,1,2,-1,-4]));

// better approach using sorting and two pointer
function threeSumBetterApproach(nums){
    let arr = nums.sort((a,b)=>a-b);
    let finalResult = [];
    for(let i=0;i<arr.length;i++){
        if(i>0 && arr[i] === arr[i-1]) continue; // skip duplicates for i
        let left = i+1;
        let right = arr.length -1;
        while(left<right){
            let sum = arr[i]+arr[left]+arr[right];
            if(sum === 0){
                finalResult.push([arr[i],arr[left],arr[right]]);
                left ++;
                right --;
                while(left<right && arr[left] === arr[left-1]) left++; // skip duplicates for left
                while(left<right && arr[right] === arr[right+1]) right--; // skip duplicates for right
            }else if(sum<0){
                left++;
            }else{
                right--;
            }
            
        }
    }
    return finalResult
}

// console.log(threeSumBetterApproach([-1,0,1,2,-1,-4]));