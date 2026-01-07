// batch processing
const input = [1,2,3,4,5,6,7,8,9,10];
function performBatchProcessing(arr,n){
  // print elements at batches of n
 
  //split the initial arr in batches of n;
  for (let i = 0; i < arr.length; i += n) {
    const batch = arr.slice(i, i + n);
    console.log(batch);
  }
    
}
// performBatchProcessing(input,1)

// object mapping
// const input = { S: [28, 29, 30], M: [29, 30, 31] };
// Output:
// 	{    
// 		28: [s],
//         29:[S,M],
//         30: [S,M],
//         31: [M]
//       }

function performObjectMapping(arr1,arr2){
  let mappedObj = {};
  for(let i=0;i<arr1.length;i++){
    if(!mappedObj[arr1[i]]){
      mappedObj[arr1[i]] = ["S"]
    }
  }
  for(let j =0;j<arr2.length;j++){
    if(!mappedObj[arr2[j]]){
      mappedObj[arr2[j]] = ["M"]
    }else{
      mappedObj[arr2[j]].push("M")
    }
  }
  console.log(mappedObj)
  return mappedObj;
}
// let output = performObjectMapping([28,29,30],[29,30,31]);

function performObjectMappingUsingSinglePass(arr1,arr2){
    const result = {};

  function add(key, value) {
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(value);
  }

  arr1.forEach(item => add(item, "S"));
  arr2.forEach(item => add(item, "M"));

  return result;
}
// let output = performObjectMappingUsingSinglePass([28,29,30],[29,30,31]);
// console.log(output)

function performObjectMappingUsingMapFunction(arr1,arr2){
  const map = new Map();

  arr1.forEach(item => {
    map.set(item, ["S"]);
  });

  arr2.forEach(item => {
    if (map.has(item)) {
      map.get(item).push("M");
    } else {
      map.set(item, ["M"]);
    }
  });

  return Object.fromEntries(map);
}
// console.log("performObjectMappingUsingMapFunction")
// const output  = performObjectMappingUsingMapFunction([28,29,30],[29,30,31])
// console.log(output)

const promise1 = new promise((resolve, reject) => {
console.log(1)
resolve('resolve1')
})

const promise2 = promise1.then((res) => {
console.log(res)
})
console.log('promise1:', promise1);
console.log('promise2:', promise2);