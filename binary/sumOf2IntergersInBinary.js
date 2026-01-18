// sum of 2 integers in binary format

// simple approach
function arithmeticSumOfNumbers(a,b){
    //convert the inputs to numbers;
    const num1 = Number(a);
    const num2 = Number(b);

    //caclulate the decimal sum;
    const sum = num1 + num2;
    return sum.toString(2)
}

console.log(arithmeticSumOfNumbers(5,3)); // 1000
console.log(arithmeticSumOfNumbers("10","5")) // 1111



// using bitwise approach
function sumOf2nosUsingBitwiseApproach(a,b){
    while(b!=0){
        // calculate the carry bits (where both a and b have 1s) and shift left
        const carry = (a & b) << 1;
        // calculate the sum without carry (XOR operator)
        a = a ^ b;
        // update b to be the new carry for the next iteration
        b = carry
    }
    return a.toString(2)    
}
console.log(sumOf2nosUsingBitwiseApproach(5,3));
console.log(sumOf2nosUsingBitwiseApproach(10,5));