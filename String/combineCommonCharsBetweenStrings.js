// url -> https://www.geeksforgeeks.org/dsa/concatenated-string-uncommon-characters-two-strings/
//Find resultant string after concatenating uncommon characters of given strings
// time complexity-> 0(m+n)


function gettingUnCommonCharsFromtwoStringsUsingSet(s1,s2){
    let charSet = new Set(s2);
    let res = "";
    for(let i=0;i<s1.length;i++){
        if(!charSet.has(s1[i])){
            charSet.add(s1[i])
        }else{
            charSet.delete(s1[i])
        }
    }
    for(let ch of charSet){
        res+=ch;
    }
    return res;
}

console.log(gettingUnCommonCharsFromtwoStringsUsingSet("abcs","cxzca"))
