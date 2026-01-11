//Given a string, find the repeated character present first in the string.
// bruteforce -> dual looping
function findCharacterRepeatFromLeftToRightBruteforce(string){
    for(let i=0;i<string.length;i++){
        for(let j=i+1;j<string.length;j++){
            if(string[i] === string[j]){
                return string[i]
            }
        }
    }
    return null;
}
console.log("bruteforce")
console.log(findCharacterRepeatFromLeftToRightBruteforce('abc'));
console.log(findCharacterRepeatFromLeftToRightBruteforce("sanjaysanjay"));
console.log(findCharacterRepeatFromLeftToRightBruteforce("geeksforgeeks"))

// without using builtin
function findCharacterRepeatFromLeftToRightBetter(string){
    const hash = Array(256).fill(0);
    const pos = Array(256).fill(0);
    let k;
    let p = -1;

    for(let i=0;i<string.length;i++){
        k = string[i].charCodeAt();
        if(hash[k]===0){
            hash[k]++;
            pos[k] = i
        }else if(hash[k] ===1){
            hash[k]++
        }
    }

    for(let i=0;i<256;i++){
        if(hash[i] === 2){
            if(p === -1){
                p =pos[i]
            }else if(p>pos[i]){
                p = pos[i]
            }
        }
    }
    return p===-1 ? null : string[p]
}
console.log("better")
console.log(findCharacterRepeatFromLeftToRightBetter("abc"));
console.log(findCharacterRepeatFromLeftToRightBetter("sanjaysanjay"));
console.log(findCharacterRepeatFromLeftToRightBetter("geeksforgeeks"));

function findCharacterRepeatFromLeftToRight(string){
    let charFreqMap = {};
    for(let str of string){
        if(charFreqMap[str]){
            charFreqMap[str]+=1
        }else{
            charFreqMap[str] = 1
        }
    }
    for(let str  of string){
        if(charFreqMap[str] > 1){
            return str
        }
    }

    return null
}
console.log("using builtin")
console.log(findCharacterRepeatFromLeftToRight("sbc"));
console.log(findCharacterRepeatFromLeftToRight("sanjaysanjay"))
console.log(findCharacterRepeatFromLeftToRight('geeksforgeeks'))


//solution using single traversal
function findCharacterRepeatFromLeftToRightSingleTraversal(string){
    const alreadyVisited = Array(256).fill(false);
    let res = -1;
    for(let i=string.length-1;i>=0;i--){
        if(alreadyVisited[string[i].charCodeAt()] === false){
            alreadyVisited[string[i].charCodeAt()] = true
        }else{
            res = i
        }
    }
    return res!= -1 ? string[res] : null;
}
console.log("single traversal");
console.log(findCharacterRepeatFromLeftToRightSingleTraversal("abc"));
console.log(findCharacterRepeatFromLeftToRightSingleTraversal("sanjaysanjay"));
console.log(findCharacterRepeatFromLeftToRightSingleTraversal("geeksforgeeks"));