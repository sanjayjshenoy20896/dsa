/***
 * Memory Management:
 * JavaScript uses automatic memory management through a process called garbage collection (GC). 
 * Developers allocate memory by creating variables, objects, and functions
 * The js engine then  automatically frees the memory of objects that are no longer "reachable" by the program. 
 * 
 * The Memory Life Cycle
 * Memory management in JavaScript involves a three-phase life cycle: 
 * 1.Allocation: Memory is allocated when you declare variables or create values.
 * 2.Usage: You read from and write to the allocated memory.
 * 3.Release: The garbage collector automatically reclaims memory that is no longer needed.  
 * 
 * How Garbage Collection Works
 * Modern JavaScript engines, like the V8 engine used in Chrome and Node.js, primarily use the mark-and-sweep algorithm to determine which objects are no longer in use. 
 * 
 * There are 2 main phases mainly 
 * 1.) Mark phase:
 * The garbage collector starts from "roots" (global variables, local variables in the current function call, etc.) and traverses all reachable objects, marking them as used.
 * 
 * 2.) Sweep phase:
 * The garbage collector then scans the memory heap and frees the memory occupied by any object that was not marked as reachable. 
 * 
 * 
*/