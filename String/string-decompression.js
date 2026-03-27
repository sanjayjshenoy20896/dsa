// string decompression

function decompression(str){
    let decompressedString = "";
    for(let i = 0;i<str.length;i+=2){
        let char = str[i];
        let count = parseInt(str[i+1]);
        decompressedString += char.repeat(count);
    }
    return decompressedString;
}
const compressedString = "a3b2c4";
console.log(decompression(compressedString)); // Output: "aaabbcccc"


// decompress only of string count reduces;
function decompressionOptimized(str){
    let decompressedString = "";
    let countObj = {};
    for(let i = 0;i<str.length;i+=2){
        let char = str[i];
        let count = parseInt(str[i+1]);
        if(countObj[char] && countObj[char]<count){
            
        }
    }
}