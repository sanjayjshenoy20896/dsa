function flattenNumbersArrayData(userInput){
  // output data
  const result = [];
  // add already added values in set
  const dataAlreadyPresent = new Set();
  const inputData = [ ...userInput];
  
  // the loop must run till its length nulltifies
  while(inputData.length){
    
    //get the last element of the input data;
    let value = inputData.pop();
    //if it is an array, we need spread the value towards the end of the input array to process again
    if(Array.isArray(value>0)){
      inputData.push(...value)
    // if it is an object, we must get the values of the object and spread it towards the ned of the array
    }else if(typeof value === "object" && value !== null){
      inputData.push(...Object.values(value));
    }else if(typeof value === "number" && !dataAlreadyPresent.has(value)) {
      // in this case it is a number, we will need to add it in the set as  well as compare if it already exists in that set
      dataAlreadyPresent.add(value);
      result.unshift(value);
    }
  }
  return result
}
const result  = flattenNumbersArrayData( [1,2,[[3,{'a':4}]],5,6,[7,{'b':8}],[0] ])
console.log("result",result);

