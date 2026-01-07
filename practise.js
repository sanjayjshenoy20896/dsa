const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

// Write a function to find and return the product with id = 2
// If not found, return null

function findProductPriceByProductId(arr,id){
  return arr.find((product)=> product.id === id) || null;
}
// console.log(findProductPriceByProductId(products,2))

// Input: [1,2,3,4,5], size = 2
// Output: [[1,2],[3,4],[5]]

function batchPrinting(arr,size){
  let batches = [];
  for(let i=0;i<arr.length;i+=size){
    let batch = arr.slice(i,i+size)
    batches.push(batch)
  }
  return batches;
}
// console.log(batchPrinting([1,2,3,4],2))

const purchases = [
  { userId: 1, amount: 100 },
  { userId: 2, amount: 200 },
  { userId: 1, amount: 150 }
];

// Return total amount spent by each user
// Output: { 1: 250, 2: 200 }
function objectMappingAmountByUser(arr){
  let user = {};
  arr.forEach((item)=>{
    if(user[item.userId]){
      user[item.userId]+= item.amount
    }else{
      user[item.userId] = item.amount
    }
  })
  return user;
}
// console.log(objectMappingAmountByUser(purchases))

function aggregateByUser(arr){
  return arr.reduce((acc, { userId, amount }) => {
    acc[userId] = (acc[userId] || 0) + amount;
    return acc;
  }, {});
}

// console.log(aggregateByUser(purchases))

function firstNonRepeatingCharacter(str){
  const charMap = new Map();
  for(char of str){
    charMap.set(char,(charMap.get(char) || 0) +1)
  }
  for(let [key,value] of charMap.entries()){
    if(value == 1){
      return key;
    }
  }
}

// console.log(firstNonRepeatingCharacter("aabbcdd"))


// Input: "lehLah interview"
// Output: "weivretni haLhel"

function reverseWords(str) {
  // implement
  let reverseWords1 = [];
  let words = str.split(" ")
  for(let i=0;i<words.length;i++){
    let reversedString = words[i].split("").reverse().join("");
    reverseWords1.unshift(reversedString)
  }
  return reverseWords1.join(" ")
}
// const output = reverseWords("lehLah interview")
// console.log(output)

function reverseWordsInString(str){
  return str.split(" ").reverse().map(str=> str.split("").reverse().join("")).join(" ")
}
// const value = reverseWordsInString("lehLah interview")
// console.log(value)


// Input: [1,2,2,3,3,3]
// Output: 3

function mostFrequent(arr) {
  // implement
  let numMap = new Map();
  arr.forEach((item)=>{
    numMap.set(item,(numMap.get(item)|| 0)+1)
  })
  const sortedCharacters =  [...numMap.entries()].sort((a,b)=> b[1]-a[1]);
  return sortedCharacters[0][0]
}
const output = mostFrequent([1,2,2,3,3,3])
// console.log(output)



const orderPurchases = [
  { userId: 1, amount: 100 },
  { userId: 2, amount: 200 },
  { userId: 1, amount: 150 },
  { userId: 2, amount: 50 }
];

function aggregationPurchases(orders){
  let userTotals = {};
  orders.forEach((order)=>{
    if(!!userTotals[order.userId]){
      userTotals[order.userId].totalAmount += order.amount;
      userTotals[order.userId].count +=1
    }else{
      userTotals[order.userId] = {};
      userTotals[order.userId].totalAmount =order.amount;
      userTotals[order.userId].count = 1
    }
  })
  return userTotals;
}
const aggregationPurchase = aggregationPurchases(orderPurchases);
// console.log(aggregationPurchase);


//1️⃣ Array + Object: Top K Frequent Elements
function findTopKFrequentElements(arr,k){
  const elementMap = new Map();
  const kFrequentValues = []
  for(let element of arr){
    elementMap.set(element,(elementMap.get(element) || 0)+1);
  }
  const sortedCharacters = [...elementMap.entries()].sort((a,b)=>b[1] - a[1]);
  console.log(sortedCharacters)
 // Take top k elements
  const topK = sortedCharacters.slice(0, k).map(([num]) => num);
  return topK;
}

// console.log(findTopKFrequentElements([1,1,2,2,2,4],2))

//finding max in k window Array: sliding window problem
function slidingWindowMax(arr,k){
  const result = [];
  const deque = [];
  
  for(let i=0;i<arr.length;i++){
    // 1. Remove indices from the back whose corresponding values are smaller
        // than or equal to the current element. They are no longer useful
        // as the current element is larger and appears later.
      while(deque.length>0 && arr[deque[deque.length-1]] <= arr[i]){
        deque.shift()
      }
      // psuh the index in deque
      deque.push(i)
      // 3. Remove index from the front if it's outside the current window's left boundary.
      // The front element is always the current maximum.
      if (deque.length > 0 && deque[0] === i - k) {
          deque.shift();
      }

      // 4. If the window has reached size k, the front of the deque holds the maximum.
      if (i >= k - 1) {
          result.push(arr[deque[0]]);
      }
      
  }
  return result;
}
// console.log(slidingWindowMax([1,3,-1,-3,5,3,6,7],3))
function slidingWindowMax1(arr,k){
  const result = [];
  const batches = [];
  for(let i=0;i<arr.length;i++){
    const batch = arr.slice(i,i+k);
    if(batch.length  ===k)batches.push(batch);
  }
  for(let i=0;i<batches.length;i++){
    result.push(Math.max(...batches[i]))
  }
  console.log(result)
  return result;
}
// slidingWindowMax1([1,3,-1,-3,5,3,6,7],3)


// product of array except self:
function productOfArrayExceptSelf(arr){
  let productArr = [] 
  for(let i=0;i<arr.length;i++){
    const filteredArray = arr.filter((element, index) => {
      return index !== i;
    })
    const selfPfroduct = filteredArray.reduce((acc,cur)=> acc*cur,1);
    productArr[i] = selfPfroduct 
  }
  return productArr;
}

// console.log(productOfArrayExceptSelf([1,2,3,4]))
function productOfArrayExceptSelf1(arr){
  const n = arr.length;
  const result = Array(n).fill(1);
  let prefix = 1;
  let suffix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }
  return result;
}
// console.log(productOfArrayExceptSelf1([1,2,3,4]))


