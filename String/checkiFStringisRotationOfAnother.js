function checkIfStringIsRotated(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    if(str1.length ===0 && str2.length ===0){
        return true
    }
    const connectionString = str1 + str1;
    return connectionString.includes(str2)
}
console.log(checkIfStringIsRotated("waterbottle","erbottlewat"));
console.log(checkIfStringIsRotated("hello","world"))
console.log(checkIfStringIsRotated("amazon","onamaz"))