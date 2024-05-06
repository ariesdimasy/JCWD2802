function compute(x){
    let result =  (5*x) - 10
    return result // f(x)
}

function compute2(x) { 
    let result = (2*x) + 5
    return result
}

function hello(){
    console.log("hello")
}

console.log(compute(5))
console.log(compute2(5))

// let x = 5
// let result =  (5*x) - 10
// console.log(result)

// let x2 = 6
// let result2 =  (5*x2) - 10
// console.log(result2)

// let x3 = 10
// let result3 =  (5*x3) - 10
// console.log(result3)

console.log(compute(5))
console.log(compute(6))
console.log(compute(10))

hello()
let result = compute(10) // (5*X) - 10
console.log(result)

// function test() { 
//    console.log('test')
// }

let test = function(){
    console.log('test')
}

let result2 = test()
console.log('result2 => ',result2)

// C -> Denis Ritchi --> linux --> linus trovald
// C -> OS MAC OS
// C++ --> OOP
// C++++ --> C# --> microsoft  
// .NET
// C#, C++, ASP. VB.NET
// VB 6 

// google 
// kotlin <-- nama pulau, android 
// dart --> flutter <-- mobile hybrid 
// golang 2007 
// GCP google cloud patform 
// youtube 
// 

// meta / facebook 
// react 
// react native --> mobile hybrid 
// AI / pytorch

// AMAZON 
// prime, twicth , prime video 
// AWS ( amazon web service )

// ALIBABA
// ALIBABA CLOUD 

// sun microsystem 
// java 1995 , kopi

// oracle 
// oracle sql , 
// mysql 
// sun microsystem , JAVA

// mariadb 

// SAP 
// ERP --> enterprice resource planning
// ABAP

// sql <--
// sql server <-- microsoft () 
// ms access <-- 
// postgres <-
// sqlite <-- DBMS
// mariadb
// cockroachdb 

// nosql 
// mongodb 
// firebase 

// MAC OS 
// bahasa C
// swift MAC APPLICATION 

// microsoft 
// NOKIA
// github 
// typescript ( javascript type casting)
// .NET ( F#, actionscript , FLASH)
// copilot untuk github 

// python <-- belanda , C++
// ruby <-- jepang 
// php <--  resmus lerdorf <-- perl
// js <-- 1995 brendan eich 
// nodejs <-- ryan dahl , 2009, 2012-2014, react <-- chrome v8 engine 


// CI <-- framework PHP <-- rocktar 
// Laravel <-- taylor otwell 
// wordpress <-- 
// VUE <-- china, Svelte , evan yu
// jquery <-- 

// nokia( tukang kayu), sony ericso , motorolla <-- eropa, jepang
// OS , symbian , JAVA 

// blackberry <-- Canada
// 2009 -2012

// android dibuat 2 orang , di beli google
// android studio <-- google

// China ( 2008 ) <--- nikel
// xiaomi, redmi, oppo , vivo



const test2 = function(x){
    return x * x
}

console.log(test2(10))

let name2 = "dimas"
function sayName(){
    
    let i = 10
    console.log(i)

    console.log(name2)
}

function showStand(name, master='unknown') { 
    return {
        name:name,
        master:master
    }
}

console.log(showStand("Magician Red","Muhammad Abdul"))
console.log(showStand("the Fool","Iggy"))
console.log(showStand("Cheap Trick"))
console.log(showStand('','Jonathan Joestar'))

console.log(1,2,3,4,5,6,7,8,9,10)

function log2(x,y, ...z){
    console.log(x)
    console.log(y)
    console.log(z)
}

log2(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)

function getMessage(firstName){
    console.log(" this --> ",this)
    //console.log(firstName)
    function sayHello(){
        return "Hello "+firstName
    }

    function welcomeMessage(){
        return "Welcome to Purwadhika"
    }

    return sayHello()+" "+welcomeMessage()
}

console.log(getMessage("Dimas"))

function factorial(x){
    if(x > 1){
        // x -1 = 4
        return factorial(x-1) * x // *0 *2 *3 *4 *5
    } else{
        return 0
    }
    
}

console.log(factorial(6))

// function palindrome(word1) { ... }
const palindrome = (word1) => {
    console.log("this --> ", this)
    let word2 = ""
    for(let i = word1.length-1; i >= 0; i--){
        word2 += word1[i]
    }
    return word1 == word2
}

console.log(palindrome("kasur ini rusak"))
console.log(palindrome("car"))
console.log(palindrome("racecar"))

console.log(isNaN(NaN))
console.log(isNaN(23))
console.log(isFinite(34))
console.log(parseFloat("34.56"))
console.log(parseInt("234"))
console.log(Number("345"))