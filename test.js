function test1(){
    let counter = 0
    // i = 10
    for(let i = 0; i < 10; i+=2){
        counter += 3
        console.log(" loop ", i)
    }
    // console.log(i)

    return counter // 15
}

console.log(test1()) // 5

// <------------------ -4 -- -2 - 0 ---------10------------->



