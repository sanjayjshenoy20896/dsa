class Node {
    // Constructor with data and optional next pointer
    constructor(data1, next1 = null) {
        this.data = data1;
        this.next = next1;
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


function insertAtHead(head,newData){
    let newNode  = new Node(newData,head)
    return newNode;
}

let head  = new Node(2);
head.next = new Node(3);
head = insertAtHead(head,5);
printLinkedList(head);
