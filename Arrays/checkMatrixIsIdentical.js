function checkIfMatrixIsIdentical(m1,m2){
    let matrixDimensions = m1.length;
    let innerDimensions = m1[0].length;
    for(let i=0;i<matrixDimensions;i++){
        for(let j=0;j<innerDimensions;j++){
            if(m1[i][j] != m2[i][j]){
                return false
            }
        }
    }
    return true;
}
   let A = [ [1, 1, 1, 1],
              [2, 2, 2, 2],
              [3, 3, 3, 3],
              [4, 4, 4, 4]];

    let B = [ [1, 1, 1, 1],
              [2, 2, 2, 2],
              [3, 3, 3, 3],
              [4, 4, 4, 4]];

console.log(checkIfMatrixIsIdentical(A,B))