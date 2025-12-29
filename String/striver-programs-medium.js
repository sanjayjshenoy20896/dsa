// sort characters by frequency
function sortCharactersByFrequency(str){
    const charFrequency = new Map();   
    for(let char of str){
        charFrequency.set(char,(charFrequency.get(char)| 0)+1)
    }
    const sortedCharacters = [...charFrequency.entries()].sort((a,b)=> b[1]-a[1]);
    let result ="";
    let results = []
    for(const [char,freq] of sortedCharacters){
        results.push({
            character:char,
            count:freq
        })
        result+=char.repeat(freq)
    }
    return {result,results};
}
// console.log(sortCharactersByFrequency("tree"))

function convertRomanToNumber(roman){
    //roman to number
    const romanMapping  = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let res = 0;
    // traverse from start to end of the string
    for(i=0;i<roman.length -1;i++){
        if(romanMapping[roman[i]] < romanMapping[roman[i+1]]){
            res-=roman[i]
        }else{
            res+=roman[i]
        }
    }
    return res +romanMapping[roman[roman.length -1]];
}

// console.log(convertRomanToNumber("V"))

// covert atoI
/*** Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
1. Whitespace: Ignore any leading whitespace (" ").
2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
 */