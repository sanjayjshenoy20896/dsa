const promise1 = new promise((resolve, reject) => {
console.log(1)
resolve('resolve1')
})

const promise2 = promise1.then((res) => {
console.log(res)
})
console.log('promise1:', promise1);
console.log('promise2:', promise2);

// promise1: awaited
// promse2:
// 1
// resolve1

const numbers = [1,[2,[3,[8,10],4],5],6]

//faltten the array 
// sort the array and get the last three and first three

function arrayFlatteningAndFindingTheThree(arr){
  let result = [];
  let alreadyVisitedValue = new Set()
  let input = [...arr]
  while(input.length){
    let value = input.pop();
    if(Array.isArray(value)){
      input.push(...value)
    }else if(!alreadyVisitedValue.has(value)){
      alreadyVisitedValue.add(value);
      result.unshift(value)
    }
  }
  console.log(result)
  let largestValue = -Infinity;
  let secondLargestNumber = -Infinity;
  let thirdLargestNumber = -Infinity;
  
  for(let i=0;i<result.length;i++){
    if(result[i]>largestValue){
      largestValue  = result[i]
    }
  }
  
  for(let i=0;i<result.length;i++){
    if(result[i]!=largestValue && result[i]>secondLargestNumber){
      secondLargestNumber = result[i]
    }
  }
  
  for(let i=0;i<result.length;i++){
    if(result[i]!=largestValue && result[i]!= secondLargestNumber && result[i]>thirdLargestNumber){
      thirdLargestNumber = result[i]
    }
  }
  return {
    largestValue,
    secondLargestNumber,
    thirdLargestNumber
  }
}
// console.log(arrayFlatteningAndFindingTheThree(numbers));

function arrayFlatteningAndFindingTheThreeNew(arr){
  let result = [];
  let alreadyVisitedValue = new Set()
  let input = [...arr]
  while(input.length){
    let value = input.pop();
    if(Array.isArray(value)){
      input.push(...value)
    }else if(!alreadyVisitedValue.has(value)){
      alreadyVisitedValue.add(value);
      result.unshift(value)
    }
  }
  console.log(result)
  let largestValue = -Infinity;
  let secondLargestNumber = -Infinity;
  let thirdLargestNumber = -Infinity;
  for(let i=0;i<result.length;i++){
    if(result[i]>largestValue){
      largestValue  = result[i]
    }
     if(result[i]!=largestValue && result[i]>secondLargestNumber){
      secondLargestNumber = result[i]
    }
     if(result[i]!=largestValue && result[i]!= secondLargestNumber && result[i]>thirdLargestNumber){
      thirdLargestNumber = result[i]
    }
  }
  return {
    result,
    largestValue,
    secondLargestNumber,
    thirdLargestNumber
  }
}
console.log(arrayFlatteningAndFindingTheThreeNew(numbers))

// function prototype
const student = {
  firstName: "sanjay",
  lastName: "shenoy",
  age:23
}

student.prototype.greet = ()=>{
  console.log(`Hi ${this.firstName} ${this.lastName}, Your age is ${student.age}`)
}

console.log(student.greet());
