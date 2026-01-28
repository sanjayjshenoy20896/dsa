/**
 *  There is only one row of fruit trees on the farm, oriented left to right. 
 * An integer array called fruits represents the trees, where fruits[i] denotes the kind of fruit produced by the ith tree.
 * There are two baskets available, and each basket can only contain one kind of fruit. The quantity of fruit each basket can contain is unlimited.
 * Start at any tree, but as you proceed to the right, select exactly one fruit from each tree, including the starting tree. One of the baskets must hold the harvested fruits.
 * Return the maximum number of fruits you can collect with this procedure.
 * Examples:
 * Input :fruits = [1, 2, 1]
Output :3
Explanation : We will start from first tree.
The first tree produces the fruit of kind '1' and we will put that in the first basket.
The second tree produces the fruit of kind '2' and we will put that in the second basket.
The third tree produces the fruit of kind '1' and we have first basket that is already holding fruit of kind '1'. So we will put it in first basket.
Hence we were able to collect total of 3 fruits.
 */


function totalFruit(fruits) {
    const n  = fruits.length;
    let left = 0;
    let maxFruits = 0;
    const fruitCountMap = new Map();
    for(let right = 0;right<n;right++){
        // store the count of fruits in the map
        fruitCountMap.set(fruits[right],(fruitCountMap.get(fruits[right])||0)+1);
        // Shrink window if more than 2 types exist
        while(fruitCountMap.size>2){
            fruitCountMap.set(fruits[left],fruitCountMap.get(fruits[left])-1);
            if(fruitCountMap.get(fruits[left])===0){
                fruitCountMap.delete(fruits[left]);
            }
            left++
        }
        const len = right-left+1;
        maxFruits = Math.max(maxFruits,len);
    }
    return maxFruits;
}
console.log("totalFruit");
console.log(totalFruit([1,2,1])); // 3
console.log(totalFruit([0,1,2,2])); // 3