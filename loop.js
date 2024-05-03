let val = 10 

/*
- di tingkatkan / ditambahkan 5
- sebanyak 3 kali 
*/

// val += 5
// console.log(val)
// val += 5
// console.log(val )
// val += 5
// console.log(val)

for(var i = 1;i <= 3; i++) {
    val+=5
    console.log(val)
}
console.log(i)

console.log(10 % 2 == 0)
console.log(7 % 5 == 3)
console.log(9 % 3 == 3)
console.log(9 % 2 == 1)

// 2 - 10
/*
2
4
6
8
10
*/

for(let j = 2; j <= 10; j+=2) {
    console.log(j)
}

for(let k = 1; k <= 10; k++){
    if(k % 2 == 0) {
        console.log(k)
    }
}

let start = 1
while(start <= 3){
    console.log("ini")
    start++
}
console.log(start)

console.log("==============")
start2 = 1
do{
    console.log("do while ", start2)
    start2 *= 2
} while(start2 < 20)
console.log(start2)

for(let i = 0; i <= 10; i++ ){
    console.log("hello")
    if(i == 3){
        break
    }
}

for(let i = 0; i < 5; i++) {
    console.log(" dio says : ")
    if(i === 3) continue
    console.log("za warudo ", i)
   
}

let num = 25

/* 2 -> 24 */
// 25 % 2 = ada
// 25 % 3 = ada
// 25 % 4 = ada 
// 25 % 5 = 0

// isPrime = false 

let num2 = 7
// 2 - 6
// 7 % 2 = ada
// 7 % 3 = ada
// 7 % 4 = ada
// 7 % 5 = ada
// 7 % 6 = ada

// isPrime = true 

let name = "aries dimas yudhistira"
let count = 0

for(let i = 0; i <= name.length; i++) {
    if(name[i] == "i"){
        count = count + 1
    }   
}

console.log(count)