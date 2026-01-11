// check if sentance is palindrome -> remove all non alhanumeric chars

function checkIfSentanceIsPalindrome(string){
    let sent = [];
    for(let char of string){
        if(/[a-zA-Z0-9]/.test(char)){
            sent.push(char.toLowerCase())
        }
    }
    let reversedString = sent.slice().reverse().join("")
    return sent.join("") === reversedString;
}

console.log(checkIfSentanceIsPalindrome("Too hot to hoot."));