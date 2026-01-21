
function checkIfNumberIsOddOrEven(num){
    const numDivide = Math.floor(num/2);
    const numMultiply = numDivide*2;
    return numMultiply == num ? "even" :"odd"
}
console.log(checkIfNumberIsOddOrEven(5))