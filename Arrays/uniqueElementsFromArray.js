function uniqueElements(arr){
  let elementMap = new Set();
  let uniqueElements = [];
  for(let element of arr){
    if(!elementMap.has(element)){
      elementMap.add(element);
      uniqueElements.push(element) 
    }
  }
  return uniqueElements.sort((a,b)=>a-b);
}
console.log(uniqueElements([4,5,2,2,3,1,5]))