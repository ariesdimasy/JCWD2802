let num = 1543
if(num % 2 == 0) { 
   console.log("angka genap") 
} else if(num % 2 == 1) {
    console.log("angka ganjil")
}

let num2 = 49
let isPrime = true
// 123 / 2 = 61 * 2 = 122 --> 1
// 1543 / 2 = 771 * 2 = 1542 --> 1
for(let i = 2; i < num2; i++) { 
    if(num2 % i == 0){
        console.log(num2," bisa di bagi bilangan = ", i)
        isPrime = false
        break;
    }
}

if(isPrime) { 
    console.log(num2," Bilangan Prima")
} else {
    console.log(num2,"Bukan bilangan prima")
}

let res = 0
for(let i = 1; i <= 5; i++) { 
    res = res + i
    console.log(res)
}

let res2 = 1
for(let i = 6; i >= 1; i--) { 
    res2 = res2 * i
    
}
console.log(" res 2 --> ",res2)

// fibbonaci 

first_num = 1 // angka pertama 1 
second_num = 1 // angka kedua 1

// first_num = second_num
// second_num = first_num + second_num

for(i = 3; i <= 15; i++) {
    let temp = first_num // 1 
    first_num = second_num // 1
         //2       // 1 + 1
    second_num = temp + second_num
    console.log("fib ke = > ",i," result fib --> ",second_num)
}

/*
looping 1
first_num = 1
second_num = 2

looping 2
first_num = 2
second_num = 3

looping 3
first_num = 3
second_num = 5

first_num = 5
second_num = 8

*/

