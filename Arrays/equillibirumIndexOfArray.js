//complexity analysis Time:O(n) Space: O(1)
function findEquillibriumIndexInArray(arr){
    const n = arr.length;
    let leftSum = 0;
    let totalSum = arr.reduce((acc,sum)=>acc+sum,0);

    for(let i=0;i<n;i++){
        const rightSum = totalSum - leftSum -arr[i];

        if(leftSum === rightSum){
            return i
        }
        leftSum+=arr[i];
    }
    return -1;
}
console.log(findEquillibriumIndexInArray([-7, 1, 5, 2, -4, 3, 0]));