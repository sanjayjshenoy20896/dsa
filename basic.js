//swap 2 nos without use of temporary variable
function swapTwoNumber(a,b){
   a = a+b; //11
   b = a-b; //5
   a  =a-b // 6
   return {a,b}
}
console.log(swapTwoNumber(5,6));

