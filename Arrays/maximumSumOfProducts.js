function maximumSumOfProducts(a,b){
    let sum = 0;
    a.sort();
    b.sort();
    for(let i=0;i<a.length;i++){
        sum+= (a[i]*b[i]);
    }
    return sum;
}

     let A = [ 1, 2, 3 ]; 
    let B = [ 4, 5, 1 ];
    console.log(maximumSumOfProducts(A,B))