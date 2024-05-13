let num = 5
num += 2
num += 2
console.log(num)

let num2 = 7
for(let i = 0; i < 10; i+=3){
    num2+= 1
}
console.log(num2)

console.log(1+2)
console.log(1/2)
console.log(1*2)
console.log(1**2)
console.log(4 % 3)
console.log(100 % 2)

let num3 = 10
if(num3 % 2 == 0){
    console.log("genap")
} else {
    console.log("ganjil")
}

console.log(2 == 2) // true
console.log(2 != 1) // true 
console.log("dimas" == "")
console.log("2" == 2)
console.log("2" === 2)

console.log(2 > 2)

let name = "dimas"
if(name == ""){
    console.log("nama harus diisi")
}else  {
    console.log("selamat datang ", name)
}