// complexity Time: O(n log n + O(M)) Space: O(1)
function commonStringPrefix(arr){
    if(!arr || arr.length ===0){
        return ""
    }
    arr.sort((a,b)=>a-b)
    const first = arr[0];
    const last = arr[arr.length-1];
    let i=0;
    while(i<first.length && first[i] === last[i]){
        i++;
    }
    return first.slice(0,i)
}
console.log(commonStringPrefix(["flower", "flow", "flight"]))