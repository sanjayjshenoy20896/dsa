// maxprofit from array of prices

//Time Complexity: O(n), as we are traversing the prices[] array only once.
//Auxiliary Space: O(1)
function maxProfit(prices){
    let minPrice = prices[0];
    let result = -Infinity;
    for(let i=1;i<prices.length;i++){
        minPrice = Math.min(prices[i],minPrice);
        result = Math.max(result,prices[i] - minPrice); 
    }
    return result;
}
console.log("maxProfit");
console.log(maxProfit( [7, 10, 1, 3, 6, 9, 2]))


function maximumProfitBruteforce(arr){
    let arrLen = arr.length;
    let maxProfit = 0;
    for(let i=0;i<arrLen;i++){
        for(let j=i+1;j<arrLen;j++){
            let profit = arr[j] -arr[i];
            maxProfit  = Math.max(maxProfit,profit);
        }
    }
    return maxProfit;
}
// complexity analysis -> Time complexity -> O(n2) space complexity -> O(1)
// console.log(maximumProfitBruteforce([7, 1, 5, 3, 6, 4]));