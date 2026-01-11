/**
 * Given an array arr[], where arr[i] represents the number of pages in the i-th book, 
 * and an integer k denoting the total number of students, allocate all books to the students such that:
1.) Each student gets at least one book.
2.) Books are allocated in a contiguous sequence.
3.) The maximum number of pages assigned to any student is minimized.
If it is not possible to allocate all books among k students under these conditions, return -1.
 */

function check(arr,k,pageLimit){
    // starting with the first student
    let count = 1;
    let pageSum = 0;
    for(let i=0;i<arr.length;i++){
        // if adding the current book exceeds the page 
        // limit, assign the book to the next student
        if(pageSum + arr[i] > pageLimit) {
            count++;
            pageSum = arr[i];
        }
        else {
            pageSum += arr[i];
        }
    }
    return (count<=k)
}
function allocateMinimumPagesBruteForce(arr,k){
    
    //number of students k must be greater than length of array
    if(k >arr.length){
        return -1
    }

    // if only one student, all pages belong to one student
    if(k==1){
        return arr.reduce((acc,cur)=>acc+cur,0)
    }
    
    //compute minimum page limit
    const minPageLimit = Math.min(...arr);
    //compute maximum number of pages
    const maxPageLimit = arr.reduce((acc,cur)=>acc+cur,0)

    //iterating over all possible page limits
    for(let i=minPageLimit;i<=maxPageLimit;i++){
        if(check(arr,k,i)){
            return i
        }
    }
    return -1;
}

/**
 * Time Complexity: O(n × (sum(arr) - max(arr))), where n is the total number of books, sum(arr) is the total number of pages in all the books and max(arr) is maximum number of pages in any book.
Auxiliary Space: O(1)
 */
console.log("allocateMinimumPagesBruteForce");
console.log(allocateMinimumPagesBruteForce([112,78,12],1));
console.log(allocateMinimumPagesBruteForce([12, 34, 67, 90],2))


// using binary search
function allocateMinimumPagesUsingBinarySearch(arr,k){
    //number of students k must be greater than length of array
    if(k >arr.length){
        return -1
    }

    // if only one student, all pages belong to one student
    if(k==1){
        return arr.reduce((acc,cur)=>acc+cur,0)
    }
    let low = Math.max(...arr);
    let high = arr.reduce((acc,cur)=>acc+cur,0)
    let res = -1;
    while(low<=high){
        let mid = Math.floor((high-low)/2)+low;
        if(check(arr,k,mid)){
            res = mid;
            high = mid -1
        }else{
            low = mid+1;
        }
    }
    return res;
}
console.log("allocateMinimumPagesUsingBinarySearch");
console.log(allocateMinimumPagesUsingBinarySearch([112,78,12],1));
console.log(allocateMinimumPagesUsingBinarySearch([12, 34, 67, 90],2));






