// reverse a double linked list

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

