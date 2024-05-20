function stockExchange(arr){
    let maxProfit = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] - arr[i] > maxProfit ){
                maxProfit = arr[j] - arr[i]
                //console.log(maxProfit," <= ",arr[j], "-", arr[i], i , j )
            }
        }
    }

    return maxProfit
}

console.log(stockExchange([7,1,5,3,6,4]))
console.log(stockExchange([7,6,4,3,1]))