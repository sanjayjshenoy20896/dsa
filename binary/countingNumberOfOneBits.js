//  number of 1 bits


// using counting approach;
// complexity Time: O(N) Space: O(1)
function countingNumberOfOneBits(num){
    // binary representation of a number
    const string = num.toString(2)
    let count = 0;
    for(let char of string){
        if(char === "1"){
            count++;
        }
    }
    return count;
}

console.log(countingNumberOfOneBits(8));
console.log(countingNumberOfOneBits(7));

function numberOf1bits(num){
    let count = 0;
      
    // The loop runs exactly the number of times there are 1 bits
    while(num!=0){
        // Clear the rightmost 1 bit
        num&= (num-1);
        // Increment the count for the bit that was just cleared
        count++;
    }
    return count;
}
console.log(numberOf1bits(8));
console.log(numberOf1bits(7));


