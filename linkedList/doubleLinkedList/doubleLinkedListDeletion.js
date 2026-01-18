//deleting an element at the tail of double linked list

// Class representing a node in Doubly Linked List
class Node {
    // Constructor to initialize a node
    constructor(data, next = null, prev = null) {
        // Stores data of the node
        this.data = data;

        // Pointer to the next node
        this.next = next;

        // Pointer to the previous node
        this.prev = prev;
    }
}

function deleteTail(head){
    if(!head){
        return null
    }
    if(!head.next){
        return null
    }
    let temp = head;
    while(temp.next){
        temp = temp.next
    }
    temp.prev.next = null;
    return head;
}

// create a simple DLL 1<->2<->3
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head
head.next.next = new Node(3);
head.next.next.prev = head.next;

// delete an element at tail

