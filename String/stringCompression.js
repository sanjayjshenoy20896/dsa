// string comparison


// if repeated chars are consecutive
function stringCompression(str){
    let compressedString = "";
    let count = 1;
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count++
        }else{
            compressedString+= `${str[i]}${count}`
            count = 1;
        }
    }
    // Handle the last sequence of characters
    return compressedString;
}
const string = "aaabbcccc";
console.log(stringCompression(string)); // Output: "a3b2c4"

// if char is not consecutive
function stringCompressionConsecutive(str){
    let charCountMap = {};
    let compressedString = "";
    for(let char of str){
        if(charCountMap[char]){
            charCountMap[char]++;
        }else{
            charCountMap[char] = 1;
        }
    }
    for(let [key, value] of Object.entries(charCountMap)){
        compressedString+= `${key}${value}`;
    }
    return compressedString;
}
const string2 = "abcabc";
console.log(stringCompressionConsecutive(string2));