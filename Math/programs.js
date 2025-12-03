/***
 * Counting number of digits in a number;
 */

function countDigits(num) {
    const numLength = Math.floor(Math.log10(Math.abs(num))) + 1;
    const count = String(Math.abs(num)).length;
    return {numLength,count}
}

const digitCount = countDigits(1234567890);
// console.log(digitCount);


/***
 *  Reverse digits of a number;
 */

//approach 1: convert to string,split and reverse;
function reverseNumber1(num) {
    const stringRep = String(num).split("").reverse().join("");
    return Number(stringRep);
}
const reversedNum1 = reverseNumber1(1234567890);
// console.log(reversedNum1); //output: 0987654321

//approach 2: using math operations:
function reverseNumber2(num){
    let reversedNumber = 0;
    while(num > 0){
        let lastDigit = num%10;
        reversedNumber = (reversedNumber*10) + lastDigit;
        num = Math.floor(num/10);
    }
    return reversedNumber;
}
const reversedNum2 = reverseNumber2(1234567890);
// console.log(reversedNum2); //output: 0987654321 

/***
 * Check if a number is palindrome or not;
 */

function isPalindrome(num){
    const reversedNum1 = reverseNumber2(num);
    if(reversedNum1 === num){
        return true
    }else{
        return false;
    }
}
const palindromeCheck = isPalindrome(1221);
// console.log(palindromeCheck); //output: true

/***
 * Find GCD (Greatest Common Divisor) of two numbers;
 */

function findGCD(a,b){
    let num1 =Math.abs(Math.floor(a));
    let num2 =Math.abs(Math.floor(b));
    while(num2){
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
const gcd= findGCD(9,12);
// console.log(gcd); //output: 3

/***
 * Armstrong number check
 * 
 */
function isArmstrongNumber(num){
    const numString = String(num);
    let sum =0;
    const numDigits = numString.length;
    for(let i=0;i<numDigits;i++){
        const digit = parseInt(numString[i]);
        sum+=Math.pow(digit,numDigits);
    }
    console.log(sum)
    return sum === num;
}
// 7612

const isNumberaArmstrongNumber = isArmstrongNumber(153);
// console.log(isNumberaArmstrongNumber); //output: true

/***
 * Get divisors of a number
 */

function getDivisors(num){
    const results = [];
    for(let i=1;i<=num;i++){
        if(num%i === 0){
            results.push(i);
        }
    }
    return results;
}
const divisors = getDivisors(12);
// console.log(divisors); //output: [1,2,3,4,6,12]


// find if the number is odd or even without bit maniplualation or modulus
function checkIfNumberIsOddorEven(num){
    // divide and get the integer part ->2
    const dividedNum =Math.floor(num/2);

    // multiply by the same offset -> 2
    const backMultipled = Math.floor(dividedNum*2);
    const status = backMultipled === num ? "even" : "odd";
    return status;
}

const numberToTest = 6;
const testResult = checkIfNumberIsOddorEven(numberToTest)
console.log(testResult)
