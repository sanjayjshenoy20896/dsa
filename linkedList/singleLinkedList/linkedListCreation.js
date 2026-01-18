class Node{
    constructor(start,next=null){
        this.data = start // data value 
        this.next = next; // pointer to the next value
    }
}

const arr = [2,5,8,7];
const y = new Node(arr[0]);
console.log(y);
console.log(y.data)

/**
 * The class has 2 elements data that contains the value of the node and next that contains the address of the next node
 * There is a constructor which assigns the values to a new node.
 * A new keyword is used to dynamically allocate memory to a node with data as arr[0].
 */