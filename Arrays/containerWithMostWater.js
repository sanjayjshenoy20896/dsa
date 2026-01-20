/**
 * 
 * Problem Statement: Given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water. 
 * Return the maximum amount of water a container can store. 
 * Notice that you may not slant the container. 
 */
function containerWithMostWaterBruteforce(arr){
    const n = arr.length;
    let maxArea = -Infinity;

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let area = (j-i)*Math.min(arr[i],arr[j]);
            maxArea = Math.max(maxArea,area)
        }
    }
    return maxArea;
}
console.log(containerWithMostWaterBruteforce([1,4,2,3]))


// optimal approach
// complexity analysis Time -> O(N) space -> O(1)
function containerWithMostWaterOptimal(arr){
    let maxArea = -Infinity;
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        let area = (j-i)*Math.min(arr[i],arr[j]);
        maxArea = Math.max(area,maxArea);
        if(arr[i]<arr[j]){
            i++
        }else{
            j--
        }
    }
    return maxArea
}
console.log(containerWithMostWaterOptimal([1,4,2,3]))