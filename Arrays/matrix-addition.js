// matrix addition 
function matrixAddition(m1,m2){
    let n = m1.length;
    let innerlength = m1[0].length;
    let c = Array.from({ length: n }, () => Array(innerlength).fill(0));
    for(let i=0;i<n;i++){
        for(let j=0;j<innerlength;j++){
            c[i][j] = m1[i][j] + m2[i][j] 
        }
    }
    return c
}
console.log(matrixAddition([ [1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4] ],[ [1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4] ]));