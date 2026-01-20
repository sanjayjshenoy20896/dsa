const arr = [
    ['sanjay',25],
    ['sanjay1',26],
    ['sanjay2',27]
]
const arr2 = arr.map(([name,age])=>{
    return {name,age}
})
console.log(arr2);