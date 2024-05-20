let result 

function greet(str){
    result = str
}

function calculator(a, b){
    result = a + b
    displayer(result)
}

function displayer(result){
    console.log(result)
}

calculator(34,5)

// greet("hello")

// console.log(result)

function calculator2(a, b, callback){
    if(callback){
        callback(a + b)
    } else {
        console.log("callback doesnt exists")
    }
    
}

calculator2(3,4,displayer)
calculator2(4,5,function(result){
    console.log("bisa ngapain aja")
    console.log("result -> ", result)
})

setTimeout(function(){
    console.log("DONE after 3 seconds")
},3000)

// const users = require("./User")
const { people, hobbies} = require("./User")

// console.log(users)
console.log(people)

console.log(hobbies[0])