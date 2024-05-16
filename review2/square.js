function square(num){
    for(let i = 0; i < num; i++){
        let str = ""
        for (let j = 0; j < num; j++){
            str += "*"
        }
        console.log(str)
    }
}

function squareRevamp(num) { 
    let str = ""
    for(let i = 0; i < num; i++){
        str += "*"
    }
    for(let i = 0; i < num; i++){
        console.log(str)
    }

}

square(5)
squareRevamp(7)

