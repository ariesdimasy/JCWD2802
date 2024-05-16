class User {

}

let person = {
    name:"dimas",
    age:27,
    coding:() => {
        console.log("iam coding golang")
    },
    address:{
        city:"Kab. Tangerang",
        country:"indonesia",
        street:"jl. karang tengah"
    },
    'funny-games':["rocket league","genshin impact"],
    true:"bisa key boolean"
}

let person2 = {
    name:"rian",
    age:30,
    coding:()=>{
        console.log("iam coding java")
    },
  
}

let arr = [person, person2]

console.log(person.age)

for(let i = 0; i < arr.length; i++){
    console.log(arr[i].address?.city)
}

person2.coding()

// function declaration 
function hello(){
    this.foo = "a"
    this.bar = "b"
}

let obh = new hello()

console.log(obh)

// function expression
const hello2 = function(){

}

const hello3 = () => {
    this.foo = "c"
    this.bar = "d"
}

// let obh2 = new hello3()

// console.log(obh2)

console.log(typeof User)
console.log(typeof true)

console.log(Boolean("a"))
console.log(Boolean(""))
console.log(Boolean(2))

let name = "address"
let address = "name"

console.log(person["name"])

console.log(person['funny-games'])

console.log(person.true)
console.log(person[true])

let keyword = "richard"
let keyword2 = 89
let result = []
let result2 = []
let people = [
    {
        name:"dimas",
        score:80,
    },
    {
        name:"richard",
        score:90,
    },
    {
        name:"naufal",
        score:89,
    }
]

for(let i = 0; i < people.length; i++){
    // console.log("name => ", people[i].name)
    // console.log("name => ",people.name)
    if(keyword == people[i].name){
        result.push(people[i])
        break
    }
}

console.log(result)

for(let i = 0; i < people.length; i++){
   if(people[i].score < keyword2){
    result2.push(people[i])
   }
}

console.log(result2)

/*
    [{
        name:"richard",
        score:90,
    }],
*/
result2 = []
for(let i = 0; i < people.length; i++){
    if(people[i].name == keyword || people[i].score == keyword2){
     result2.push(people[i])
    }
}

console.log(result2)



