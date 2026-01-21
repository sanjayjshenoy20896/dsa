// Search in 2D array
// unsorted array
//complexity: Time: O(N2) Space: O(1) 
function linearSearchIn2DArray(arr,key){
    let n1 = arr.length;
    let n2 = arr[0].length;
    for(let i=0;i<n1;i++){
        for(let j=0;j<n2;j++){
            if(arr[i][j] === key){
                return true;
            }
        }
    }
    return -1;
}
const input = [[77, 12, 9], [4, 1, 5], [6, 8, 3]];
console.log(linearSearchIn2DArray(input,1))


function binarySearchIn2DArray(arr,key){
    let rows = arr.length;
    let columns = arr[0].length;
    let left = 0;
    let right = rows*columns -1
    while(left<=right){
        //caclculate the mid point
        const mid = Math.floor((left + right) / 2);

        // Map the 1D mid index to 2D coordinates
        const row = Math.floor(mid / columns);
        const col = mid % columns;
        const midElement = arr[row][col];
        if(midElement === key){
            console.log(`Element found at position (${row}, ${col})`);
            return true
        }else if(midElement<key){
            start = mid+1
        }else{
            end= mid-1
        }
    }
    return -1
}
const input1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
console.log(binarySearchIn2DArray(input1,11))


// using built in method;
function searchIn2dArrayUsingSome(arr,key){
    return arr.some((list)=> list.includes(key))
}
console.log(searchIn2dArrayUsingSome(input1,11))
