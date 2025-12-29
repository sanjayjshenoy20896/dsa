// remove outer parenthesis
function removeOuterParentheisis(str){
    let result = "";
    let counter = 0;
    for(let char of str){
        if(char === "("){
            if(counter >0) result+="("
            counter++
        }else if(char === ")"){
            counter--;
            if(counter>0) result+=")"
        }
    }
    return result;
}
// console.log(removeOuterParentheisis("((()))"));

// reverse of a string
function reversewordsInStringBruteforce(str){
    // words
    let words = [];
    
    // single chars
    let word = "";

    // traverse through the string
    for(let char of str){
        if(char != " "){
            word+=char;
        }else if(word.length >0){
            words.push(word);
            word = ""
        }
    }
    if(word.length >0){
        words.push(word)
    }
    words.reverse();
    return words.join(" ")
}

// console.log(reversewordsInStringBruteforce(" amazing coding strings "));


function reversewordsInStringBuiltIn(s){
    let reversedString = s.split(" ").reverse().join(" ");
    return reversedString;
}
// console.log(reversewordsInStringBuiltIn("amazing coding strings"))

function reversewordsInStringOptimal(s){
    let reversedString = "";
    let i = s.length -1;
    while(i<=0){

        // Skip spaces;
        while(i<=0 &&  s[i] === " "){
            i--
        }

        // break is length is out of bounds
        if(i<0) break;

        // mark the end of word;
        end =i

        while(i>=0 && s[i] != " "){
            s--;
        }
        let word = s.substring(i+1,end+1);

        if(reversedString.length >0){
            reversedString+=" ";
        }

        reversedString+=word;
    }
    return reversedString;
}
// console.log(reversewordsInStringOptimal("amazing coding strings"));


// largest odd number in a string
function findLargestOddNumberInString(str){
    let ind = -1;

    // find the last digit of odd string;
    let i;
    for(i=0;i<str.length;i++){
        if((str[i] %2) === 1){
            ind = i;
            break;
        }
    }

    // remove leading zeros;
    i=0;
    while(i<=ind && str[i] === 0){
        i++
    }
    return str.substring(i,ind+1)
}

// console.log(findLargestOddNumberInString("5347"))

// longest common prefix in a array of words
function longestCommonPrefix(strings){
    if(strings.length === 0){
        return  ""
    }
    strings.sort();
    let commonPrefix = "";
    // firstString after Sorting
    let first = strings[0];
    // last string after sorting
    let last = strings[strings.length -1];
    for(let i=0;i<Math.min(first.length,last.length);i++){
        // if chars differ
        if(first[i] != last[i]){
            return commonPrefix;
        }
        commonPrefix+=first[i]
    }
    return commonPrefix
}

// console.log(longestCommonPrefix(["flow","flame","float"]))

// isomorphic strings
// Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.

function isomorphicPossible(str1,str2){
    let stra = Array(256).fill(0);
    let strb = Array(256).fill(0);
    let n = str1.length;
    let isIsoMorphic = false
    if(str1.length !=str2.length){
        isIsoMorphic = false;
    }
    for(let i=0;i<n;i++){
        if(stra[str1.charAt(i)] !== strb[str2.charAt(i)]){
            isIsoMorphic = false;
        }
        // Update positions with current index + 1
        stra[str1.charCodeAt(i)] = i + 1;
        strb[str2.charCodeAt(i)] = i + 1;
        isIsoMorphic = true;
    }
    return isIsoMorphic;
}

// console.log(isomorphicPossible("paper","tight"))

// check if a string is rotation of other
function isStringRotated(str1,str2){
    let status =false;
    if(str1.length != str2.length){
        return status;
    }
    for(let i=0;i<str1.length;i++){
        let rotated = str1.substring(i) + str1.substring(0,i);
        if(str1 === rotated){
            status = true
        }
    }
    return status
}

// console.log(isStringRotated("rotation","tionrota"));


// check if 2 strings are anagrams to each other;
function isAnagramsToEachOther(str1,str2){
    let isNormalised = false
    let normalisedStr1 = str1.toLowerCase().split("").sort().join("");
    let normalisedStr2 = str2.toLowerCase().split("").sort().join("");
    if(normalisedStr1 === normalisedStr2){
        isNormalised = true
    }
    return isNormalised
}
console.log(isAnagramsToEachOther("integer","TEGerin"))