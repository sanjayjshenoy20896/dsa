// gas station problem
function gasStationProblem(gas,cost){
    let total_tank = 0;
    let current_tank = 0;
    let start_tank = 0;

    for(let i=0;i<gas.length;i++){
        let diff = gas[i] - cost[i];
        total_tank+=diff;
        current_tank +=diff
        if(current_tank<0){
            start_tank = i+1;
            current_tank = 0
        }
    }
    return total_tank>=0 ? start_tank :-1
}

console.log(gasStationProblem([4,5,7,4],[6,6,3,5]))