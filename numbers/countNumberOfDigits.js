// count number of digits
//using string conversion  
// gtime complexity: 0(1) space complexity o(number of digits)
function countNoOfDigitsUsingStringConversion(num){
    let numString = num.toString();
    return numString.length;
}
console.log("countNoOfDigitsUsingStringConversion")
console.log(countNoOfDigitsUsingStringConversion(587))


// count no of digits using itteration
// complexity analysis -> Time complexity: 0(N) space complexity: O(1)
function countNoOfDigitsUsingIteration(num){
    let count = 0;
    if(num ===0){
        return 1
    }
    while(num!=0){
        num = Math.floor(num/10);
        count+=1 
    }
    return count;
}

console.log("countNoOfDigitsUsingIteration");
console.log(countNoOfDigitsUsingIteration(25));


// using log base 10 approach
// complexity analysis: Time complexity-> O(1) Space complexity -> O(1)
function countNoOfDigitsusingLog(num){
    return Math.floor(Math.log10(num) + 1);
}
console.log("countNoOfDigitsusingLog");
console.log(countNoOfDigitsusingLog(34));