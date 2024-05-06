function ladder(x) { 
    let result = ''
    for(let i = 1; i <= x; i++) {
        result += i+" "
        console.log(result)
    }
    
    // result += 2
    // console.log(result)
    // result += 3
    // console.log(result)
    // console.log(1, 2,3)
    // console.log(1,2,3,4)
    // console.log(1,2,3,4,5)
}

ladder(10)

function advanceLadder(h) {
    let counter = 1
    for(let i = 1; i <= h; i++){
        let result = ""
        for(let j = 1; j <= i; j++){
            if(counter > 9){
                result += counter+" "
            } else {
                result += "0"+counter+" "
            }
            counter++
        }
        console.log(result)
    }
}

advanceLadder(5)
