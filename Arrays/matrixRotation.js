function matrixRotation(matrix){
    let n = matrix.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for(let i=0;i<n;i++){
        matrix[i].reverse()
    }
    return matrix;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrixRotation(matrix))