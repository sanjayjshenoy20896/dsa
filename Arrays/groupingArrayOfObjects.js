// complexity analysis -> Time and space: O(n) 
function groupBykey(arr){
  let groupedMap = new Map();
  for(let i=0;i<arr.length;i++){
    let obj = arr[i];
    if(groupedMap.has(obj.city)){
      groupedMap.get(obj.city).push(obj.name)
    }else{
      groupedMap.set(obj.city,[obj.name])
    }
  }
  return Object.fromEntries(groupedMap)
}
const inputArray = [
 { city: "BLR", name: "A" },
 { city: "DEL", name: "B" },
 { city: "BLR", name: "C" }
]
console.log(groupBykey(inputArray));



function groupByKeyUsingReduce(arr) {
  return arr.reduce((acc, { city, name }) => {
    acc[city] = (acc[city] || []);
    acc[city].push(name);
    return acc;
  }, {});
}
console.log(groupByKeyUsingReduce(inputArray))