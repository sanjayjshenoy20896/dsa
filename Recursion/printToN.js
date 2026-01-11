function printTon(initial,last){
    if(initial<=last){
        console.log(initial)
        printTon(initial+1,last)
    }
}
printTon(1,1000)



