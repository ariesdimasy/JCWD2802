function matrix(n){
    let result = []
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < n; j++){
            row.push(" ")
        }
        result.push(row)
    }

    return result
}

let arr = matrix(9)

console.log(arr)

console.log(arr[1][2])

arr[1][2] = 'X'

console.log(arr)

function matrixAdd(arr1, arr2) {

}

matrixAdd([
    [ 1, 2, 3, 4 ],
    [ 10, 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ]
  ],[
    [ 3, 5, 8, 4 ],
    [ 5, 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ]
  ])

  /*
[
    [ 4, 7, 11, 8 ],
    [ 15, 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x' ]
  ]

  */