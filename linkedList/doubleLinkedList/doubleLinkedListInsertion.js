// insert at the end of double linked list

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

//convert an array into Double linked list
function convertArrayToDoubleLL(arr){
    let head = new Node(arr[0]);
    let prev = head

    // traverse through array to create double linked list
    for(let i=0;i<arr.length;i++){
        let temp = new Node(arr[i],null,prev);
        prev.next = temp; // Set 'next' of the previous node to the new node
        prev = temp; // Move 'prev' to the new node
    }
    return head;
}

// Function to print the elements of the doubly linked list
function printList(head) {
    while (head) {
        console.log(head.data + " "); // Print the data of the current node
        head = head.next;  // Move to the next node
    }
    console.log();  // New line after printing the list
}

// Function to insert a new node at the tail of the doubly linked list
function insertAtTail(head, k) {
    let newNode = new Node(k);  // Create a new node with data 'k'

    if (!head) {
        return newNode;  // If the list is empty, return the new node as the head
    }

    let tail = head;
    while (tail.next) {
        tail = tail.next;  // Traverse to the last node of the list
    }

    tail.next = newNode;  // Connect the new node to the last node
    newNode.back = tail;  // Set the 'back' pointer of the new node to the previous node
    return head;  // Return the head of the modified list
}


let arr = [12, 5, 8, 7, 4];  // Initialize an array
let head = convertArrayToDoubleLL(arr);  // Convert the array to a doubly linked list


console.log("Doubly Linked List Initially:");
printList(head);  // Print the doubly linked list


console.log("\nDoubly Linked List After Inserting at the tail with value 10:");
head = insertAtTail(head, 10);  // Insert a node with value 10 at the end
printList(head);  // Print the updated doubly linked list