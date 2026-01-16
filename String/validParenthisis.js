// valid parentheis
function validParentheisUsingStack(str){
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(const s of str){
        if(bracketPairs[s]){
            stack.push(bracketPairs[s])
        }else{
            if(stack.pop() !== s){
                return false;
            }
        }
    }
    return stack.length ===0
}
console.log(validParentheisUsingStack("{}"));
console.log(validParentheisUsingStack("{}[]()"));
console.log(validParentheisUsingStack("[}"));
console.log(validParentheisUsingStack("{[()]}"))