/**
 * Memoization
 * a powerful optimization technique in computing that speeds up programs by storing (caching) the results of expensive function calls and reusing those results when the same inputs occur again, avoiding redundant calculations
 * 
 */

// sum memoization -> multiple versions are present
// approach 1: 
function createSumFn(){
    let prevA = null;
    let prevB = null;
    return (a,b)=>{
        if(a === prevA && b === prevB){
            return [a,b]
        }
        prevA = a;
        prevB = b;
        return a+b;
    }
}
const sum = createSumFn();

// console.log(sum(2, 3)); // 5
// console.log(sum(2, 3)); // [2, 3] since same args repeated
// console.log(sum(4, 5)); // 9
// console.log(sum(4, 5)); // [4, 5]
// console.log(sum(2, 3)); // 5 (fresh call again)

// using storing the values to avoid fresh calls for long memory calls.
const setValues = [] 
function getSameValue(a,b){
  let exists = setValues.find((value)=> value.a === a && value.b ===b);
  if(exists){
    return exists
  }else{
    console.log("NEW execution");
    let store = {
      a,b,sum:a+b
    }
    setValues.push(store)
    return store;
  }
}
// value1 = getSameValue(5,10);
// console.log("value1",value1)
// value2 = getSameValue(5,10);
// console.log("value2",value2);
// value3 = getSameValue(10,5);
// console.log("value3",value3);

// using arguments and json.stringify
let cache = {};

function getSameValueUsingCache(a, b) {
  const key = JSON.stringify(arguments);

  if (cache[key]) {
    console.log("data from cache")
    return cache[key];
  }
  console.log("data from execution")
  const result = { a, b, sum: a + b };
  cache[key] = result;
  return result;
}
// console.log(getSameValueUsingCache(5,10));
// console.log(getSameValueUsingCache(5,10));
// console.log(getSameValueUsingCache(2,3))
// console.log(getSameValueUsingCache(5,10));



