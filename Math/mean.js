function mean(arr){
    let sum = arr.reduce((acc,cur)=>acc+cur,0);
    return sum/arr.length;
}
console.log(mean([1,2,3,4]))