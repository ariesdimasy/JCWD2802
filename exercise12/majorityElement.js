function majorityElement(arr){
    let half = arr.length / 2

    for(let i = 0; i < arr.length; i++){
        let majority = 0 // 3
        for(let j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                majority += 1
            }
        }

        if(majority > half){
            return arr[i]
        }
    }

    return -1
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))

console.log([-1,-6,0,1,2].sort((a,b) => b - a))