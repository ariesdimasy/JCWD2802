function isPalindrome(kata){
    
    let temp = ""

    for(let i = kata.length-1; i >= 0; i--){
        temp += kata[i]
    }

    // if(kata === temp){
    //     return true
    // } else {
    //     return false
    // }

    return kata === temp
  
}

function isPalindromeRevamp(kata){
    let mid = Math.floor(kata.length / 2)

    for(let i = 0; i < mid; i++){
        if(kata[i] !== kata[kata.length - 1 - i]){
            return false
        }
    }

    return true
}

console.log(isPalindromeRevamp("kasur ini rusak")) // true
console.log(isPalindromeRevamp("racecari")) // true