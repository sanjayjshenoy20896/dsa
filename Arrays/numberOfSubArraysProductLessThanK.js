//count sub array with product less than k
function numberOfSubArraysWithProductLessThank(arr,k){
    const n = arr.length;
    let product = 1;
    let left = 0;
    let count = 0
    for(let right = 0;right<n;right++){
        //compute the running product
        product*=arr[right];


        // shrink the window when the running product is less than target k
        while(product>=k) {
            product = product/arr[left];
            left++
        }

        // calculate the count
        count+=right-left+1;
    }
    return count;
}
console.log(numberOfSubArraysWithProductLessThank([10,5,2,6],100));
