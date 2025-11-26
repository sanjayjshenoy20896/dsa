/*
 * Recursion:
 *
 * This is a techniue where a function calls itself directly or indirectly to solve a problem. 
 */

// print a string N times using recursion;
function printStringNTimes(str, n,count) {
    if(count === n) return;
    console.log(str);
    printStringNTimes(str, n, count + 1);
}
// printStringNTimes("Hello, World!", 5, 0);

//print numbers from 1 to N using recursion;
function printNumbers1ToN(n, current) {
    if(current >n) return ;
    console.log(current);
    printNumbers1ToN(n, current + 1);
}

// printNumbers1ToN(100,90)

function printNumbersFromNto1(n,current){
    if(current<n) return ;
    console.log(current);
    printNumbersFromNto1(n, current - 1);
}
// printNumbersFromNto1(90,100)

function findSumOfFirstNNumbers(n){
    if(n===1){
        return 1
    }
    return n + findSumOfFirstNNumbers(n-1)
}
// console.log(findSumOfFirstNNumbers(5)); // 15

function findSumOfFirstNNumbersUsingFormula(n){
    return n*(n+1)/2
}
// console.log(findSumOfFirstNNumbersUsingFormula(5)); // 15

// factorial of a number using loop;
function factorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact * i;
    }
    return fact;
}
const fact = factorial(3);
// console.log(fact); // 6

// factorial of a number using recursion;
function factorialUsingRecursion(n){
    if(n==1){
        return 1;
    }
    return n*factorialUsingRecursion(n-1);
}
const factRec = factorialUsingRecursion(5);
// console.log(factRec); // 120

// Fibonacci series using recursion;
function fibonacci(n){
    if(n<=1){
        return n;
    }
    const first = fibonacci(n-1);
    const second = fibonacci(n-2);
    return first + second;
}
const fibonacciOf5 = fibonacci(4);
console.log(fibonacciOf5); // 5