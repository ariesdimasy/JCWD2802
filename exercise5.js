function lowest(arr) { 
    let result = arr[0] // 14

    for(let i = 0; i < arr.length; i++) { 
           // 1 > 10
        if(result > arr[i]) {
            result = arr[i] // 1
        }
    }

    return result // 1
}

console.log(lowest([14,3,1,5,6,2,9,10]))

// lowest = 14

// loop
 // jika lowest lebih rendah dari item 

 // jika lowest lebih tinggi dari item 

 function arrToString(arr){
    let result = ""
                 // 6 <=  7 - 1
    for(let i = 0; i <= arr.length-1; i++) { 
        if(i == arr.length-1){
            result += "and "+arr[i]
        } else {
            result += arr[i]+", "
        }
    }

    return result

 }

 console.log(arrToString(["Nika","Mera","Moku","Ito","Nui","Hana","Magu","Pika","Hito model Buddha"]))
 // logia : Mera, Moku, Magu, Nika
 // zoan : Hito no mi model Nika, Hito
 // paramecia : Ito, Nui, Hana

 function addArray(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return "array length must be same"
    }

    let result = []
    for(let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
    }

    return result
}

console.log(addArray([1,2,3],[4,5,6]))
console.log(addArray([1,2,3],[1,4,5,6]))

function limitArray(maxSize, arr){
    let result = []
    for(let i =0; i < maxSize; i++) {
        result.push(arr[i])
    }

    return result
}

console.log(limitArray(5, [1,2,3,4,5,6,6,7,8,9,0]))
console.log(limitArray(7, [1,2,3,4,5,6,6,7,8,9,0]))

function combineArray(arr1, arr2) {
    arr1.push(arr2[0])
    arr1.push(arr2[1])
    arr1.push(arr2[2])

    return arr1
}

console.log(combineArray([1,2,3],[4,5,6]))

function findDuplicate(arr){
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let found = false 
        for(let j = 0; j < arr.length; j++) { 
            if(i != j && arr[i] == arr[j] && arr[i] != null && arr[j] != null) {
                
                arr[j] = null
                found = true 
            }
        }

        if(found){
            result.push(arr[i])
        }
    }
    console.log(" arr --> ",arr)

    return result
}

console.log(" findDuplicate --->>>",findDuplicate([1,2,2,2,3,3,4,5,5]))

function findDifference(arr1, arr2){
    let combine = arr1.concat(arr2)
    let result = []
    for(let i = 0; i < combine.length; i++) {
        let found = false
        for(let j = 0; j < combine.length; j++) { 
            if(i != j && combine[i] == combine[j]) {
                found = true
                break;
            }
        }

        if(!found){
            result.push(combine[i])
        }
    }

    return result
}

console.log(findDifference([1,2,3,4,5],[3,4,5,6,7]))

function checkPrimitiveData(arr){
    let result = []
    for(let i = 0; i < arr.length; i++) { 
        if(typeof arr[i] != "object" || arr[i] == null){
            result.push(arr[i])
        }
    }

    return result 
}

console.log(checkPrimitiveData([1,undefined,{ name:"dimas" },[],"string",{},[1,2,3],null]))

function secondSmallestNumber(arr){

    let min = arr[0]
    let min2 = arr[1]

    for(let i = 0; i < arr.length; i++) { 
        if(min > arr[i]){
            min = arr[i]
        }
        else if(min2 > arr[i] && min2 > min) { 
            min2 = arr[i]
        }
    }
    return min2
}

console.log(secondSmallestNumber([56,3,1,7,21,6,8,]))// 3

function suit(playerChoice){
    let a = ["rock","paper","scissors"]

    let ai = Math.floor(Math.random() * 3)

    if(playerChoice == a[ai]){
        console.log("draw")
    } else if((playerChoice == "rock" && a[ai] == "scissors") || 
    (playerChoice == "scissors" && a[ai] == "paper") || 
    (playerChoice == "paper" && a[ai] == "rock")) {
        
        console.log("player win")
    } else {
        console.log("AI win")
    }

    console.log(" ai ---> ", a[ai]," player ---> ", playerChoice)
}

suit("rock")
suit("paper")
suit("scissors")