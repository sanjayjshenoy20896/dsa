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