function checkIfItIsATidyNumber(num){
    let str = String(num);
    for(let i=0;i<str.length;i++){
        if(parseInt(str[i]) > parseInt(str[i+1])){
            return false
        }
    }
    return true;
}
console.log(checkIfItIsATidyNumber(1243));
console.log(checkIfItIsATidyNumber(1234));