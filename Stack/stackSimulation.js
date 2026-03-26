/**
 * Time & Space Complexity

Time: O(n²) (n insertions × stack simulation)

Space: O(n) for stack

💡 Interview note:
This is acceptable because constraints are usually small for such problems.
 */


//helper -> simulate stack
function simulateStack(ops) {
  const stack = [];

  for (const op of ops) {
    if (op.startsWith("PUSH")) {
      const value = Number(op.split(" ")[1]);
      stack.push(value);
    } else if (op === "POP") {
      if (stack.length > 0) stack.pop();
    }
  }

  return stack.length ? stack[stack.length - 1] : null;
}

function findMissingOpIndex(ops, missingOp, currentTop) {
  for (let i = 0; i <= ops.length; i++) {
    const newOps = [
      ...ops.slice(0, i),
      missingOp,
      ...ops.slice(i)
    ];

    const top = simulateStack(newOps);

    if (top === currentTop) {
      return i;
    }
  }

  return -1; // not possible
}
const ops = ["PUSH 1", "PUSH 2", "PUSH 3", "POP", "POP"];
const missingOp = "PUSH 4";
const currentTop = 2;

console.log(findMissingOpIndex(ops, missingOp, currentTop));
// Output: 0

