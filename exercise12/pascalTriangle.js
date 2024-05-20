function pascalTriangle(n){
    let result = []
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < i+1; j++){
            // console.log(" row --> ", result)
            if(j == 0 || i == j){
                row.push(1)
            } else{
                let total = result[i-1][j-1] + result[i-1][j]
                row.push(total)
            }
            
        }
        result.push(row)
    }

    return result
}

console.log(pascalTriangle(5))