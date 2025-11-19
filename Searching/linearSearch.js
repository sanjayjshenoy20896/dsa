console.log("linear Search");

function performLinearSearch(array,searchKey){
    let index = -1;
    for(let i=0;i<array.length;i++){
        if(array[i] === searchKey){
            index = i
        }
    }
    return index
}
const input = [2,5,7,9,4];
const output = performLinearSearch(input,5)
console.log(input);
console.log(output);