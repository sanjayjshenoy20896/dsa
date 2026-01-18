// Node class for Linked List
class Node {
    constructor(val) {
        // Store data
        this.data = val;
        // Store next pointer
        this.next = null;
    }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

// Function to search for a value in LL
function searchValue(head, key) {
    // Pointer to traverse the list
    let current = head;

    // Traverse until end
    while (current !== null) {
        // Check if current node matches key
        if (current.data === key) {
            // Return true if found
            return true;
        }
        // Move to next node
        current = current.next;
    }

    // Return false if not found
    return false;
}
let status = searchValue(head,20)
console.log(status);