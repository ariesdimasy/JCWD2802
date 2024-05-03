let word = "kasur ini rusak"
let newWord = ""
/* 
1. balik dahulu si word 
2. dibandingkan kata word yg dibalik dengan word 
*/

// for(let i = 0; i < word.length; i++) {
//     console.log(word[word.length-1-i]) // s
//     newWord += word[word.length-1-i] // s
// }

for(let i = word.length-1; i >= 0; i--) { 
    newWord += word[i] // r
}

// newWord = "rus"
// kasur === rusak
if(word === newWord) {
    console.log("palindrome")
} else {
    console.log("bukan palindrome")
}

let a = 10
let b = 15
let c = 0

c = a // 10
a = b // 15
b = c // 10

console.log(a) // 15
console.log(b) // 10

let cm = 100000
let km = Math.floor(cm / 100000) + " KM"

console.log(km)

let num = 10000000
let format = ""
let result = ''
let counterDigit = 1
let numString = String(num)

for(let i = numString.length-1; i >= 0; i--) { 
    if(counterDigit === 3) { 
        console.log(" counterDigit 3 "," digit -> ",numString[i],' ke ', i)
        format += numString[i]+'.'
        counterDigit = 1
    } else {
        console.log(" digit -> ",numString[i],' ke ', i)
        format += numString[i]
        counterDigit += 1
    }
}

console.log(format)

for(let i = format.length-1; i >= 0; i--) {
    result += format[i]
}

console.log("RP.",result,",00")

word = "hello world"
let result2 = ""
let space = false 

for(let i = 0; i < word.length; i++){
    if(i === 0){
        result2 += word[i].toUpperCase()
    }
    else if(word[i] === " ") { 
       space = true 
       result2 += " "
    }
    else {
        if(space){
            result2 += word[i].toUpperCase()
            space = false
        } else {
            result2 += word[i]
        }
    }
    
}

console.log(result2)

