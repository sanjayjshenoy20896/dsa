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

//11
/***
 * 1
 * 01
 * 101
 * 0101
 * 10101
 */
function makeRightAngledTriangleWithzerosAndOnes(lines){
    for(let i=0;i<lines;i++){
        let string = "";
        for(let j=0;j<=i;j++){
            if((i+j)%2==0){
                string+="1"
            }else{
                string+="0"
            }
        }
        console.log(string)
    }
}

// makeRightAngledTriangleWithzerosAndOnes(4);



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

//13
/***
 * 1                          -> i=0; j= 0
 * 2 3                        -> i=1,j=1  i=1,j=2
 * 4 5 6
 * 7 8 9 10
 * 11 12 13 14 15
 */

function makeNumberedRightAngledTraingle(lines){
    let number =1
    for(let i=0;i<=lines;i++){
        let str = "";
        for(let j=1;j<=i;j++){
            // console.log("i",i);
            //console.log("j",j)
            str+=number + " ";
            number++
        }
        console.log(str);
    }
}
//makeNumberedRightAngledTraingle(5);

const alphabets = ["A","B","C","D","E","F","G","H","I","J","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//14
/***
 * A
 * AB
 * ABC
 * ABCD
 * ABCDE
 */

function makeRightAngledTriangleWithAlphabets(lines){
    for(let i=0;i<lines;i++){
        let str =""
        str = alphabets.slice(0,i+1).join("")
        console.log(str);
    }
}

//makeRightAngledTriangleWithAlphabets(5);

//15
/***
 * ABCDE
 * ABCD
 * ABC
 * AB
 * A
 * 
 */

function makeInvertedRightAngledTriangle(lines){
    let str = alphabets.slice(0,lines+1).join("");
    for(let i=1;i<=lines;i++){
        str = str.slice(0,-1);
        console.log(str)
    }
}

//makeInvertedRightAngledTriangle(5);

//16
/***
 * A
 * BB
 * CCC
 * DDDD
 * EEEEE
 */

function makeContinousAlphabetTriangle(lines){
    for(let i=0;i<lines;i++){
        let str = "";
        str+= alphabets[i].repeat(i+1)
        console.log(str);
    }
}

//makeContinousAlphabetTriangle(5);

//17
/***
 *     A
 *    ABA
 *   ABCBA
 *  ABCDCBA
 */
// incomplete
function makeAlphabetSymmetricalEquilateralTriangle(lines){
    for(let i=1;i<=lines;i++){
      let pattern = "";
      for(let j=1;j<=lines-i;j++){
        pattern+= " "
      }
      for(let k=1;k<=i;k++){
        pattern+="* "
      }
      console.log(pattern);  
    }
}


//18
/***
 * E
 * DE
 * CDE
 * BCDE
 * ABCDE
 */

function makeAlphabeticalRightAngledTriangle(lines){
    const alphabetStrings = alphabets.slice(0,lines).reverse()
    for(let i=1;i<=lines;i++){
        const str = alphabetStrings.slice(0,i).reverse().join("");
        console.log(str)
    }
}
//makeAlphabeticalRightAngledTriangle(5);

//19 -> incomplete

//20 -> incomplete

//21
function makeASquareMirrorWithSpaces(lines){
    const patternString = "*";
    const emptyString = " "
    for(let i=1;i<=lines;i++){
        let str = ""
        if(i === 1  || i === lines){
            str += patternString.repeat(lines);
        }else{
            str += `${patternString}${emptyString.repeat(lines-2)}${patternString}`; 
        }
        console.log(str)
    }
}

//makeASquareMirrorWithSpaces(4)

//22
function makeASquareWithFixedNumberOnOutsideWithFilledNumbers(lines){
    const matrixLength = 2*lines -1;
    for(let i=0;i<matrixLength;i++){
        let row = "";
        for(let j=0;j<matrixLength;j++){
            const topDist = i;
            const leftDist = j;
            const rightDist = matrixLength-1-j;
            const bottomDist = matrixLength-1-i;
            const value = lines - Math.min(Math.min(topDist,bottomDist),Math.min(leftDist,rightDist))
            row+=value;
        }
        console.log(row.trim())
    }
}
makeASquareWithFixedNumberOnOutsideWithFilledNumbers(4);