// Node class to represent each element in the linked list
class Node {
    // Constructor to initialize data and next pointer
    constructor(data1) {
        this.data = data1;
        this.next = null;
    }
}

function lengthOfLinkedList(head) {
    // Initialize counter to 0
    let count = 0;

    // Initialize a temporary pointer to head
    let temp = head;

    // Traverse the linked list
    while (temp !== null) {
        // Increment count for each node
        count++;

        // Move to the next node
        temp = temp.next;
    }

    // Return the total count
    return count;
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

const length = lengthOfLinkedList(head);
console.log(length)


