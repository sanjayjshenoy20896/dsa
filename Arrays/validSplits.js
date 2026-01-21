// valid splits
// check if the running sum (leftSum) is greater than or equal to the remaining sum (totalSum - leftSum). 
function validSplits(arr){
    let totalSum = arr.reduce((acc,sum)=>acc+sum,0);
    let leftSum = 0;
    let splitIndex= 0   
    for(let i=0;i<arr.length-1;i++){
        leftSum+=arr[i]
        if(leftSum>= totalSum-leftSum){
            splitIndex++
        }
    }
    return splitIndex;
}
console.log(validSplits([10,4,-8,7,3,6]))