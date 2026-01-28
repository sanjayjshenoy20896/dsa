// rverse bits
// complexity analysis O(N) time and O(1) space
function reverseBitsBruteforce(num){
    const binaryString = num.toString(2);
    const binaryReversed = binaryString.split('').reverse().join('');
    const decimal = parseInt(binaryReversed,2);
    return decimal
}
console.log("reverse bits");
console.log(reverseBitsBruteforce(6)); //3
console.log(reverseBitsBruteforce(4294967293)); //3221225471
console.log(reverseBitsBruteforce(8))


// optimal approach
// complexity analysis: O(log N) time and O(1) space
function reverseBitsOptimalApproach(num){
    let result = 0;
    while(num>0){
        // Left shift result to make room for next bit
            result <<= 1;

            // Add the least significant bit of n to ans
            result |= (num & 1);

            // Right shift n to process the next bit
            num >>= 1;
    }
    return result
}
console.log("reverse bits optimal approach");
console.log(reverseBitsOptimalApproach(6)); //3
console.log(reverseBitsOptimalApproach(4294967293));    //3221225471
console.log(reverseBitsOptimalApproach(8)) //1


