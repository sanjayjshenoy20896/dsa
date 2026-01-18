// Definition for singly linked list
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

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

function deleteTailElement(head){
    if(head === null || head.next === null){
        return null;
    }
    // Traverse to the second last node
    let curr = head;
    while (curr.next.next !== null) {
        curr = curr.next;
    }

    // Delete tail node
    curr.next = null;

    // Return updated head
    return head;
}



let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
console.log("initial value")
printLinkedList(head)
console.log("post deletion");
head = deleteTailElement(head);
printLinkedList(head)