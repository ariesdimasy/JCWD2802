function binarySearch(arr, left, right, x){
    if(right >= left){
        let mid = left + Math.floor((right - left) / 2)
        
        if(arr[mid] == x) return mid

        if(arr[mid] > x){
            return binarySearch(arr, left, mid-1, x)
        }
        return binarySearch(arr, mid+1, right, x)
    }
    return -1
}
let arr = [2,3,4,10,40]
console.log(binarySearch(arr,0,arr.length-1,10))

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

            }
        }
    }
}