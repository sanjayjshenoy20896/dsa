/**
 * Isomorphic strings
 * If it is possible to map every character of the first string to every character of the second string.
 * Basically, in isomorphic strings, there is a one-to-one mapping between every character of the first string to every character of the second string.
 * 
 * 
 * Examples:
 * example 1:
 * str1 = 'ABCA'
str2 = 'XYZX'
'A' maps to 'X'
'B' maps to 'Y'
'C' maps to 'Z'
is isomorphic
* example 2:
str1 = 'ABCA'
str2 = 'WXYZ'
'A' maps to 'W'
'B' maps to 'X'
'C' maps to 'Y'
'A' again maps to 'Z'
not isomorphic
 */


// complexity analysis Time: O(n^2) Space: O(1)
function areIsoMorphicStringsBruteforce(str1,str2){
    if(str1.length !== str2.length) return false;
    for(let i=0;i<str1.length;i++){
        for(let j = i+1;j<str1.length;j++){
            if((str1[i] === str1[j] && str2[i]!= str2[j]) || (str1[i]!== str1[j] && str2[i] === str2[j])){
                return false;
            }
        }
    }
    return true;
}

console.log("areIsoMorphicStringsBruteforce");
console.log(areIsoMorphicStringsBruteforce('ABCA','XYZX')); // true
console.log(areIsoMorphicStringsBruteforce('ABCA','WXYZ')); // false


// optimal approach using maps
// complexity analysis Time: O(n) Space: O(1)
function areIsoMorphicStringsOptimal(str1,str2){
    // if the length of strings are not equal they are not set to be isomorphic
    if(str1.length !== str2.length) return false;

    // map to store the mapping of charatcer between str1 and str2;
    const map = new Map();

    // set to store already mapped chars of str2
    const set = new Set();

    for(let i=0;i<str1.length;i++){
        const char1 = str1[i];
        const char2 = str2[i];
        
        // If char1 has already been mapped
        if(map.has(char1)){
            // check if it is mapped to same char in str2
            if(map.get(char1)!== char2){
                return false;
            }
        }else{
            // If char2 is already mapped to some other char in str1
            if(set.has(char2)){
                return false
            }
            map.set(char1,char2)
            set.add(char2)
        }
    }
    return true;
}
console.log("areIsoMorphicStringsOptimal");
console.log(areIsoMorphicStringsOptimal('ABCA','XYZX')); // true
console.log(areIsoMorphicStringsOptimal('ABCA','WXYZ')); // false
