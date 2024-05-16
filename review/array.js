let arr = [1,2,3,4,5,6]
// console.log(arr[2])
arr[2] = 10
// console.log(arr[2])

arr.push(3)
// console.log(arr)

for(i = 0; i <= arr.length-1; i++){
    console.log(arr[i])
}

let arr2 = [] // 1,3,5,7,9
for(i = 0; i <= 10; i++){
    if(i % 2 == 1){
        arr2.push(i)
    }
}

console.log(arr2)

let arr3 = [1,[2,3,[4,5,6,[7,8,9],10],11,12],13,14,15]

console.log(arr3)

console.log(arr3[0])
console.log(arr3[1][1])
console.log(arr3[1][2][1])
console.log(arr3[1][2][3][2])

let arr4 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

console.log(arr4)
console.log(arr4[2][2])

console.log(arr4[0][0])
console.log(arr4[0][1])
console.log(arr4[0][2])
console.log(arr4[0][3])
console.log(arr4[0][4])

console.log(arr4[1][0])
console.log(arr4[1][1])
console.log(arr4[1][2])
console.log(arr4[1][3])
console.log(arr4[1][4])

function matrix(n) { 
    let result = []
    let counter = 1
    for(let i = 0; i < n; i++){
        
        let temp = []
        //console.log(temp)
        for(let j = 0; j < n; j++){
            temp.push(counter)
            counter++
        }
        result.push(temp)
        
    }

    return result
}

console.log(matrix(6))

/*  n = 2
    [
        [1,2],
        [3,4]
    ]
    
    n=3
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
*/

/*
 n = 3
    [
     [1,2,3],
     [6,5,4],
     [7,8,9]
    ]

    n = 4
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,14,13]
    ]
*/

function matrix2(n){
    let result = []
    let counter = 1 // 4
    for(let i = 0 ; i < n; i++) {
        let temp = []
        let rev = counter + n - 1 // 4 + 3 - 1 => 6
        for(let j = 0; j < n; j++){
            if(i % 2 == 0){
                temp.push(counter)
              
            }else {
                temp.push(rev--)
            }
            counter++
        }
        result.push(temp)
    }

    return result
}

console.log(matrix2(4))
