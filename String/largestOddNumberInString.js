/**
 * Largest Odd Number in String
 * 
 * Given a string num representing a large integer, return the largest-valued odd integer
 */

function findLargestOddNumberInString(num){
    let index = -1;
    let i;
    for(let i=num.length-1;i>=0;i--){
        if(parseInt(num[i])%2 ===1){
            index =i
            break
        }
    }
     // Skip leading zeroes up to the found odd digit
    i=0;
    while(i<=index && num[i] === '0'){
        i++;
    }
    // Return the substring from first non-zero to the odd digit
    return num.substring(i, index + 1);
}
console.log("largest odd number in a string");
console.log(findLargestOddNumberInString("52"));
console.log(findLargestOddNumberInString("4206"));  
console.log(findLargestOddNumberInString("500"));