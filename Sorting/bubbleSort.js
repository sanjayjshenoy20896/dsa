// compare the adjacent elements in an array and swap positons if there are not inposition
// time complextity -> bubble sort -> O(n^2);
function performBubbleSort(array){
    const arrLength = array.length; //7
    for(let i=0;i<arrLength-1;i++){
        let swappedStatus = false; // reset the status at the start every loop
        for(let j = 0;j<arrLength-i-1;j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swappedStatus = true;
            }
        }
        if (swappedStatus == false)
        break;
    }
    return array;
}

const input = [2,4,1,3,5,9,8]
// example 1 -> [2,4,1,3,5,9,8]
// First iteration [2,4,1,3,5,8] -> [2,1,4,3,5,9,8] -> [2,1,3,4,5,9,8] -> [2,1,3,4,5,9,8] -> [2,1,3,4,5,9,8]-> [2,1,3,4,5,8,9]
// second iteration  [2,1,3,4,5,8,9] -> [1,2,3,4,5,8,9] 


// example 2 -> [8,20,-2,4,-6]
// first iteration -> [8,20,-2,4,-6] -> [8,20,-2,4,-6] -> [8,-2,20,4,-6] -> [8,-2,4,20,-6] ->[8,-2,4,-6,20]
// second iteration ->  [8,-2,4,-6,20] -> [-2,8,4,-6,20] -> [-2,4,8,-6,20] -> [-2,4,-6,8,20] ->[-2,4,-6,8,20]
// third iteration ->  [-2,4,-6,8,20] -> [-2,4,-6,8,20] -> [-2,-6,4,8,20]
// 4 iteration -> [-2,-6,4,8,20]


//example -> [-6,20,8,-2,4]
// first iteration -> [-6,20,8,-2,4]  -> [-6,20,8,-2,4] false -> [-6,8,20,-2,4] true -> [-6,8,-2,20,4] true -> [-6,8,-2,4,20] true
// second iteration -> [-6,8,-2,4,20] -> [-6,8,-2,4,20] false -> [-6,-2,8,4,20] true -> [-6,-2,4,8,20] true -> [-6,-2,4,8,20] true
// third iteration -> [-6,-2,4,8,20] -> [-6,-2,4,8,20] false -> [-6,-2,4,8,20] false -> it terminates here as there is no swap that has occured


function performBubbleSort1(arr){
    let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
    return arr;
}
// using do while
// const output = performBubbleSort1(input);
//using while
const output = performBubbleSort(input);
console.log(output);
