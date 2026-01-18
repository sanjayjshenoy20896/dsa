//sum of beauty of all substrings

// The beauty of a string is defined as the difference between the frequency of the most frequent character and the least frequent character (excluding characters that do not appear) in that string.

// complexity analysis: Time: O(N2) SPACE: O(1)
function beautyOfStringBruteforce(str){
    let sum = 0;
    const n = str.length;
    for(let i=0;i<n;i++){
        const freq = {};
        for(let j=i;j<n;j++){
            const ch = str[j];
            freq[ch] = (freq[ch] || 0) +1;
            const values = Object.values(freq);
            const max = Math.max(...values);
            const min = Math.min(...values);
            sum+= (max -min);
        }
    }
    return sum;
}
console.log(beautyOfStringBruteforce("xyx"))