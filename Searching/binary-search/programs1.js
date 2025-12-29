//BS on answers

// find the floor of the square root of a number;

function floorSquare(num){
    let ans = 0;
    for(let i=1;i<=num;i++){
        if(i*i <= num){
           ans = i
        }else{
            break;
        }
    }
    return ans;
}
// console.log(floorSquare(36))

function floorSquareBS(x){
    let ans = 0;

    //handle small numbers
    if(x<2){
        return x;
    }
    let left =1;
    let right  = Math.floor(x/2);
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(mid*mid <=x){
            ans = mid;
            left = mid+1     
        }else{
            right = mid-1
        }
    }
    return ans;
}
// console.log(floorSquareBS(37))

// find Nth root of a number
// x^n=m -> x range in 1 to m 
function findNthRootOfNumber(n,m){
    for(let i=1;i<=m;i++){
        const power = Math.pow(i,n);
        if(power ===m){
            return i
        }
        if(power>m){
            break;
        }
    }
    return -1;
}
// console.log(findNthRootOfNumber(2,4))