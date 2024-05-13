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
