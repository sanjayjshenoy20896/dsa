

// find the first repeating character
function findTheFirstRepeatingCharacterInAString(string){
    let strLen = string.length;
    let strMap = new Map();
    for(let i=0;i<strLen;i++){
        if(strMap.get(string[i])){
            return string[i]
        }else{
            strMap.set(string[i],1);
        }
    }
}
console.log(findTheFirstRepeatingCharacterInAString("geeksforgeeks"));