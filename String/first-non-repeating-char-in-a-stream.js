// first non repeating char in a stream

function firstNonRepeatingCharInaStream(str){
    let freq = new Map();
    const queue = [];
    const result = [];
    for(let char of str){
        freq.set(char,(freq.get(char)|| 0) +1);

        queue.push(char);
        while(queue.length>0 && freq.get(queue[0])>1){
            queue.shift()
        }
        // current answer
        result.push(queue.length === 0 ? "#" : queue[0]);
    }
    return result.join("")
}
console.log("firstNonRepeatingCharInStream");
console.log(firstNonRepeatingCharInaStream("bb"))