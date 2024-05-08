function ladder(x) { 
    let result = ''
    for(let i = 1; i <= x; i++) {
        result += i+" "
        console.log(result)
    }
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


function fizzBuzz(n, ){
    for(let i = 1; i <= n; i+=1){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i, " fizzbuzz")
        }
        else if(i % 3 == 0){
            console.log(i," fizz")
        } else if(i % 5 == 0){
            console.log(i," buzz")
        } else{
            console.log(i)
        }
    }
}

fizzBuzz(20)

function removeElement(arr){
    let result = []

    // loop element sebanyak arr.length 
        // jika element adalah genap, maka: 
            // push element ke array baru 
        // end if
    // end loop
    for(let i =0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            result.push(arr[i])
        }
    }

    return result
}

console.log(removeElement([1,2,68,4,5,82,7,8,9,10]))

function mySplit(str){
    let resultArr = []
    let word = '' //<-- HelloWo

    for(let i = 0; i <= str.length; i++) {
        
        if(str[i] == " " ) {
            resultArr.push(word)
            word = ''
        } else if(i == str.length-1) {
            word += str[i]
            resultArr.push(word)
        }
        else {
            word += str[i]
        }
    }

    return resultArr
}

console.log(mySplit("The World Over Heaven"))

// 1. do somethimng 
// 2. compare var1 and var2 