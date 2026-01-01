// ============================================
// Miles to Kilometers Converter
// A simple program to learn JavaScript basics
// ============================================

// Define the conversion factor
// 1 mile = 1.60934 kilometers
const MILES_TO_KM = 1.60934;

// Function to convert miles to kilometers
// This function takes a number (miles) as input and returns the equivalent in kilometers
function milesToKilometers(miles) {
    // Multiply miles by the conversion factor to get kilometers
    return miles * MILES_TO_KM;
}

// Example 1: Convert a single value
let miles = 5;
let kilometers = milesToKilometers(miles);
console.log(`${miles} miles = ${kilometers.toFixed(2)} kilometers`);

// Example 2: Convert multiple values
let distancesInMiles = [1, 5, 10, 26.2, 100];

console.log("\nConverting multiple distances:");
for (let i = 0; i < distancesInMiles.length; i++) {
    let km = milesToKilometers(distancesInMiles[i]);
    console.log(`${distancesInMiles[i]} miles = ${km.toFixed(2)} kilometers`);
}

// Example 3: Using a simple prompt (when running in a browser environment)
// Uncomment the lines below if you want to try interactive input:
/*
let userMiles = prompt("Enter distance in miles:");
let userKm = milesToKilometers(parseFloat(userMiles));
alert(`${userMiles} miles = ${userKm.toFixed(2)} kilometers`);
*/

// ============================================
// Key JavaScript Concepts Used:
// ============================================
// 1. Variables: let and const to store data
// 2. Functions: Reusable blocks of code (milesToKilometers)
// 3. Console.log: Output to console
// 4. Template literals: Using ${} to insert variables into strings
// 5. Arrays: Lists of values (distancesInMiles)
// 6. Loops: for loop to repeat code
// 7. Methods: .toFixed(2) to format numbers to 2 decimal places
// 8. Math operations: Multiplication (*)
// ============================================

