// reverse word in a string

function reverseWordInAStringUsingBuiltInFunc(string){
    let arr = string.split(" ");
    let result = []
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result.join(" ");
}
console.log(reverseWordInAStringUsingBuiltInFunc("Amazing coding skills"))
