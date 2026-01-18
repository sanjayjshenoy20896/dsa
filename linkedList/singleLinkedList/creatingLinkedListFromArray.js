


// Node class for Linked List
class Node {
    constructor(val) {
        // Store data
        this.data = val;
        // Store next pointer
        this.next = null;
    }
}


const array = [1,2,3,4];


// function to print linkedList
function printLinkedList(head){
    let temp = head;
    let result  = "";
    while(temp){
        result+=temp.data + " ";
        temp = temp.next;
    }
    console.log(result.trim())
}
function createLlFromArray(arr){
    if(arr.length ===0){
        return null;
    }
    const head = new Node(arr[0]);
    let current = head;
    for(let i=1;i<arr.length;i++){
        current.next = new Node(arr[i])
        current = current.next
    }
    return head;
}
const Llhead = createLlFromArray(array);
printLinkedList(Llhead)