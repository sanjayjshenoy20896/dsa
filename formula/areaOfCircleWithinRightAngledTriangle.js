function findAreaOfCricleWithinRightAngledTriangle(p,b,h){
    let radius = p+b-h;
    let area = (radius*radius*(Math.PI/4))
    return area;
}
console.log(findAreaOfCricleWithinRightAngledTriangle(3,4,5))