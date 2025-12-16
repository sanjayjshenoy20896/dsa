/***
 * Reverse of a string
 */

function reverseAString(string){
    return string.split("").reverse().join("")
}

const reversedString = reverseAString("sanjay");
// console.log(reversedString)


/***
 * Is the given string a palindrome
 * 
 * reverse the string and compare with orginal string
 */
function isPalindrome(string){
    const reversedString = string.split("").reverse().join("");
    if(reversedString === string){
        return true
    }else{
        return false
    }
}
const isPalindromeString = isPalindrome("sanjay");
// console.log(isPalindromeString)

/***
 * Check if 2 strings are anagrams to each other
 * 
 * Approach 1: Sorting and comparison
 * 
 * 1.) Normalise strings
 * a.) Convert both strings to handle case sensitivity
 * b.) Removing non-alphanumeric characters, spaces, or punctuation if they should be ignored
 * 
 * 2.) Sort characters
 * Split each normalized string into an array of characters, sort the array alphabetically, and then join it back into a string. This ensures that if the strings are anagrams, they will have the same sorted representation.
 * 
 * compare the 2 normalised string for quality for anagrams;
 */


function isStringsAnagramsToEachOther(str1,str2){
    let  status = false
    const normalisedString1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");
    const normalisedString2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");
    // console.log(normalisedString1);
    // console.log(normalisedString2);
    if(normalisedString1 === normalisedString2){
        status = true    
    }
    return status
}

const anagram = isStringsAnagramsToEachOther("Tom Marvolo Riddle","I am Lord Voldemort");
// console.log(anagram)


//grouped anagrams from an array of strings
function groupedAnagramsFromArrayOfStrings(arr){
    const anagramMap = {};
    for(let str of arr){
        const normalisedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");
        if(anagramMap[normalisedStr]){
            anagramMap[normalisedStr].push(str);
        }else{
            anagramMap[normalisedStr] = [str];
        }
    }
    return Object.values(anagramMap);
}
// time complexity O(n * k log k) where n is number of strings and k is average length of string;
const groupedAnagrams = groupedAnagramsFromArrayOfStrings(["eat", "tea", "tan", "ate", "nat", "bat","Tom Marvolo Riddle","I am Lord Voldemort"]);
// console.log(groupedAnagrams);


// longest subsctring without repeating characters
function longestSubstringWithoutRepeatingCharacters(string){
    let start = 0; // left pointer of sliding window
    let charMap = {};// stores the index of last seen character
    let longestSubstrings = ""; // variable that stores the longest substrings found
    for(let end = 0; end < string.length; end++){
        const currentChar = string[end]; // current character at the right pointer
        if(charMap[currentChar] !== undefined && charMap[currentChar] >= start){
            // if the character is already in the map and its index is within the current window
            start = charMap[currentChar] + 1; // move the start pointer to one position after the last seen index of currentChar
        }
        charMap[currentChar] = end; // update the last seen index of currentChar
        let currentSubstring = string.substring(start, end + 1); // get the current substring
        if(currentSubstring.length > longestSubstrings.length){
            longestSubstrings = currentSubstring; // update the longest substring if current is longer  
        }
    }
    return {length: longestSubstrings.length, substring: longestSubstrings};
}
const result = longestSubstringWithoutRepeatingCharacters("abcabcbb");
// console.log("result",result);


// find first non-repeating character in a string;

function firstNonRepeatingChracter(string){
    const char = {};

    //populate char counts
    for(let i=0;i<string.length;i++){
        const currentChar = string[i];
        if(char[currentChar] !== undefined){
            char[currentChar] += 1;
        }else{
            char[currentChar] = 1;
        }
    }
    for(let i=0;i<string.length;i++){
        if(char[string[i]] === 1){
            return string[i];
        }
    }
    return null
}
const firstNonRepeatingChar = firstNonRepeatingChracter("swiss");
// console.log(firstNonRepeatingChar);

// deepClone an object;
// Creating a complete new an independent copy of an existing object, including all nested objects and properties.
function deepCloneObject(obj){
    return JSON.parse(JSON.stringify(obj));
}
const originalObj = {a:1,b:{c:2,d:3}};
const clonedObj = deepCloneObject(originalObj);
// console.log("clonedObj",clonedObj);  


//convert dot notation to nested object;
function convertDotNotationToNestedObject(obj){
    const result = {};
    for(let key in obj){
        const parts = key.split(".");
        let cur = result;
        for(let i=0;i<parts.length;i++){
            if(!cur[parts[i]]) cur[parts[i]] = {};
            cur = cur[parts[i]];
        }
        cur[parts[parts.length-1]] = obj[key];
    }
    return result;
}
const dotNotedObj = {
    "user.name":"Sanjay",
    "user.age":"28",
    "user.address.city":"Bangalore",
}
const nestedObj = convertDotNotationToNestedObject(dotNotedObj);
// console.log("nestedObj",nestedObj);  
// console.log(nestedObj.user.address)

// implement debounce
function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {fn.apply(this,args)}, delay);
    }
}
// implement throttle
// throttling ->  technique used to limit the rate at which a function or a block of code can be executed within a given time period.

function throttle(fn,delay){
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn.apply(this, args);
        }
    };
}


// execute an array of promises in sequence;
async function executePromisesInSequence(tasks){
    for(const task of tasks){
        await  task()
    }
}

// exceute an array of promises in parallel;
async function executePromisesInParallel(tasks){
    await Promise.all(tasks.map(task=>task()))
}


// url shortner -> binary to ascii
function urlShortner(url){
   return btoa(url)
}
const shortUrl = urlShortner("https://www.example.com/some/long/url");
// console.log("shortUrl",shortUrl);

// get original url from short url -> ascii to binary
function getOriginalUrlFromShortUrl(shortUrl){
    return atob(shortUrl)
}
const originalUrl = getOriginalUrlFromShortUrl(shortUrl);
// console.log("originalUrl",originalUrl);

//retry logic with max attempts
async function retryOperation(fn,retries=3){
    while(retries--){
        try{
            return await fn();
        }catch(err){
            if(retries === 0){
                throw err;
            }
        }
    }
}

// build a simple event emitter
class EventEmitter{
    constructor(){
        this.events = {};
    }

    on(event,listner){
        if(!this.events[event]){
            this.events[event] = [];
        }
        this.events[event].push(listner);   
    }
    emit(event,data){
        if(this.events[event]){
            this.events[event].forEach(listner => listner(data));
        }
    }
}
// LRU Cache -> Fixed size memory cache that discards the least recently used itens first when it it becomes full
class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key){
        if(!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key,value);
        return value;
    };

    put(key,value){
        if(this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key,value);
        if(this.cache.size > this.capacity){
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}

// in memory rate limiter (token bucket algorithm)
class RateLimiter{
    constructor(limit,interval){
        this.limit = limit;
        this.tokens = limit;
        setInterval(()=>{
            this.tokens = this.limit;
        },interval)
    }

    allowRequest(){
        while(this.tokens > 0){
            this.tokens--;
            return true
        }
        return false
    }

}
// build a worker pool
async function workerPool(tasks,workerCount){
    const results = [];
    let index = 0;
    async function worker(){
        while(index< tasks.length){
            let i = index++;
            results[i] = await tasks[i]();
        }
    }
    const workers = Array(workerCount).fill(null).map(()=>worker())
    await Promise.all(workers);
    return results;
}

// implement express like middleware
function applyMiddleware(middlewares) {
  return function(req, res) {
    let i = 0;

    function next() {
      if (i < middlewares.length) {
        const mw = middlewares[i++];
        mw(req, res, next);
      }
    }
    next();
  };
}


// single pub/sub pattern
class PubSub {
  constructor() {
    this.subs = {};
  }

  subscribe(event, fn) {
    if (!this.subs[event]) this.subs[event] = [];
    this.subs[event].push(fn);
  }

  publish(event, data) {
    this.subs[event]?.forEach(fn => fn(data));
  }
}

// password test:
// // JavaScript Program to Check if a string contains
// uppercase, lowercase, special characters and
// numeric values

function isValidPassword(str){
     let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if(pattern.test(str)){
        return true
    }else{
        return false
    }
}

const validity = isValidPassword("Sanjay@20896");
// console.log("validity",validity);

// split version
function validatePassword(password) {
  // Regex to check for at least one lowercase letter (a-z)
  const lowerCaseRegex = /[a-z]/;
  // Regex to check for at least one uppercase letter (A-Z)
  const upperCaseRegex = /[A-Z]/;
  // Regex to check for at least one digit (0-9)
  const numberRegex = /[0-9]/;
  // Regex to check for at least one special character
  // Note: this definition of "special character" includes symbols and punctuation, 
  // excluding alphanumeric characters.
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  let isValid = true;
  let errors = [];

  if (!lowerCaseRegex.test(password)) {
    isValid = false;
    errors.push("Missing at least one lowercase letter.");
  }
  if (!upperCaseRegex.test(password)) {
    isValid = false;
    errors.push("Missing at least one uppercase letter.");
  }
  if (!numberRegex.test(password)) {
    isValid = false;
    errors.push("Missing at least one number.");
  }
  if (!specialCharRegex.test(password)) {
    isValid = false;
    errors.push("Missing at least one special character.");
  }

  return { 
    isValid: isValid, 
    errors: errors,
    message: isValid ? "Password meets all criteria." : "Password does not meet criteria."
  };
}

// --- Example Usage ---

const result1 = validatePassword("Password123!");
console.log(`Result for "Password123!":`, result1);
// Output: isValid: true, message: "Password meets all criteria."

const result2 = validatePassword("noPass");
console.log(`Result for "noPass":`, result2);
// Output: isValid: false, errors: ["Missing at least one uppercase letter.", "Missing at least one number.", "Missing at least one special character."]

const result3 = validatePassword("Testing*4U");
console.log(`Result for "Testing*4U":`, result3);
// Output: isValid: true, message: "Password meets all criteria."


// individual password criteria

function checkAllCriteria(str) {
  const regex = new RegExp(
    // Lookahead to assert a lowercase character exists
    "(?=.*[a-z])" +
    // Lookahead to assert an uppercase character exists
    "(?=.*[A-Z])" +
    // Lookahead to assert a digit exists
    "(?=.*[0-9])" +
    // Lookahead to assert a special character exists (defined here as non-alphanumeric)
    "(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\|,.<>\\/?])"
  );
  
  return regex.test(str);
}

// --- Example Usage ---
console.log(checkAllCriteria("Test1!")); // true
console.log(checkAllCriteria("test1"));  // false (missing uppercase and special char)
