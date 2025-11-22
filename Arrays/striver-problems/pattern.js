/***
 * Pattern problems
 */

// make a pattern to uniform pattern with N lines and a starts on the way
function makeUniformSquarePattern(lines){
    const string = "*"
    for(let i=0;i<lines;i++){
        console.log(string.repeat(lines))
    }
}
//makeUniformSquarePattern(4);

// make a pattern which is a right angled triangle with N lines + numbers; hypotenuse on the lft side;
function makeStarRightAngledTriangleWithLeftHypotenuse(lines){
    const string = "*";
    for(let i=0;i<lines;i++){
        console.log(string.repeat(i+1))
    }
}
//makeStarRightAngledTriangleWithLeftHypotenuse(9)


function makeNumberedPatternRightAngledTriangleWithLeftHypotenuse(lines){
    for(let i=1;i<=lines;i++){
        let string = ""
        for(let j=1;j<=i;j++){
           string+=j
        }
        console.log(string)
    }
} 
// makeNumberedPatternRightAngledTriangleWithLeftHypotenuse(10)

function makeSameNumberesPatternRightAngledTriangleWithLeftHypotenuse(lines){
    
    for(let i=1;i<=lines;i++){
        let str = i;
        console.log(str.toString().repeat(i))         
    }
}
makeSameNumberesPatternRightAngledTriangleWithLeftHypotenuse(9)