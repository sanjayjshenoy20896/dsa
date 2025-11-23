/***
 * Pattern problems
 */

// make a pattern to uniform pattern with N lines and a starts on the way
//1
function makeUniformSquarePattern(lines){
    const string = "*"
    for(let i=0;i<lines;i++){
        console.log(string.repeat(lines))
    }
}
//makeUniformSquarePattern(4);

// make a pattern which is a right angled triangle with N lines + numbers; hypotenuse on the lft side;
//2
function makeStarRightAngledTriangleWithLeftHypotenuse(lines){
    const string = "*";
    for(let i=0;i<lines;i++){
        console.log(string.repeat(i+1))
    }
}
//makeStarRightAngledTriangleWithLeftHypotenuse(9)

//3
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

//4
function makeSameNumberesPatternRightAngledTriangleWithLeftHypotenuse(lines){
    
    for(let i=1;i<=lines;i++){
        let str = i;
        console.log(str.toString().repeat(i))         
    }
}
// makeSameNumberesPatternRightAngledTriangleWithLeftHypotenuse(9)

//5
function makeUpsideDownTriangle(lines){
    let str = "*"
    for(let i=lines;i>0;i--){
        console.log(str.repeat(i))
    }
}
// makeUpsideDownTriangle(5);

function generateStringFromNumber(number){
    let str = "";
    for(let i=1;i<=number;i++){
        str+=i
    }
    return str;
}

//6
function makeUpsideDownNumberedTriangle(lines){
    for(let i=lines;i>0;i--){
        const mystr = generateStringFromNumber(i)
        console.log(mystr);
    }
}

// makeUpsideDownNumberedTriangle(5);

//7
function makeEquilateralTriangle(lines){
    for(let i=1;i<=lines;i++){
        let pattern = "";
        // Add leading spaces
        for(let j=1;j<=lines-i;j++){
            pattern+= " ";
        }
        // Add stars and spaces between them
        for(let k=1;k<=i;k++){
            pattern+= "* "
        }
        console.log(pattern);
    }
}
// makeEquilateralTriangle(9)


//8
function makeUpsideDownEquilateralTriangle(lines){
    for(let i=lines;i>=0;i--){
        let pattern = "";
        for(let k=1;k<=lines-i;k++){
            pattern+= " "
        }
        for(let j=1;j<=i;j++){
            pattern+= "* "
        }
        
        console.log(pattern);
    }
}

// makeUpsideDownEquilateralTriangle(9);

//9
function combine2EquilateralTriangle(lines){
    makeEquilateralTriangle(lines);
    makeUpsideDownEquilateralTriangle(lines);
}
// combine2EquilateralTriangle(9)

//10
function symmetricalEquilateralTriangle(lines){
    const string = "*"
    for(let i=1;i<lines;i++){
        console.log(string.repeat(i))
    }
    console.log(string.repeat(lines));
    for(let j=lines-1;j>=0;j--){
        console.log(string.repeat(j))
    }
}

// symmetricalEquilateralTriangle(6)

//11 incomplete
function makeRightAngledTriangleWithzerosAndOnes(lines){
    for(let i=1;i<lines;i++){
        let string = "";
        for(let j=i+1;j<lines-1;j++){
            if(j%2==0){
                string+="0"
            }else{
                string+="1"
            }
        }
        console.log(string)
    }
}




//12 -> string reversed with spaces for palindrome sequences;
function make2RingAnglesTriangleNextToEachOther(lines){
    const fixedPattern = " ";
    for(let i=1;i<=lines;i++){
        const string = generateStringFromNumber(i);
        const reversedString = string.split("").reverse().join("");
        console.log(`${string}${fixedPattern.repeat((lines-i)*2)}${reversedString}`)
    }
}

// make2RingAnglesTriangleNextToEachOther(4)

