if(7 > 5 == false){ 
    console.log("executed if true")
}

// console.log(true == true)
// console.log(false == false)
// console.log(true == false)
// console.log(true != false)
let name = "dimas"
let age = 34
if(name == "Dimas") { 
    console.log("hello ", name)
} else {
    console.log("please rename")
}

if(age > 17) {
    console.log(name+" had ID ")
} else {
    console.log(name," doesnt had ID")
}

//traffic light 
let trafficStatus = "red"

if(trafficStatus == "red") { 
    console.log("car should stop")
} else if(trafficStatus == "yellow") { 
    console.log("car should drive slow")
} else if(trafficStatus == "green") { 
    console.log("car should drive")
} else {
    console.log("traffic status are invalid")
}

let score = 71
// 85 - 100 A 
// 75 - 84 B
// 0 - 74 C
if(score >= 85 && score <= 100){
    console.log("A")
} else if(score >= 75 && score <= 84){
    console.log("B")
} else if(score >= 0 && score <= 74){
    console.log("C")
}

// console.log("34"-1)
// console.log("34"*7)

switch(trafficStatus) { 
    case "red": // trafficStatus == "red"
        console.log("car should stop")
    case "yellow":
        console.log("car should drive slowly")
        break
    case "green":
        console.log("car should drive")
        break;
    default:
        console.log("trafficStatus error")
}

// switch(true) { 
//     case score > 75 && score <= 100: // true == score > 75 && score <= 100
//         console.log("car should stop")
//         break
// }
let fruit = "Mangoes"
switch(fruit) { 
    case "Orange": // fruit == "Orange"
        console.log("orange are $0.59 a ponds")
        break
    case "Mangoes":
    case "Papayas":
        console.log("mangoes and papayas are $2.79 a pond")
        break;
    default:
        console.log("sorry , we are out of fruit")
}

let car = "Lamborghini"

if(car === "BMW" || car === "Toyota"){
    console.log("car is awesome")
}
/*
 true || true -> true 
 true || false -> true 
 false || false -> false
*/

let score2 = 68

if(score2 >= 74 && score2 <= 100) {
    console.log("LULUS")
}

/*
true && true -> true 
true && false -> false
false && false -> false
*/

console.log(45 > 98 && (34 <= 34 || 39 <= 45))

let val = 1
const res = val == 1 ? true : false
console.log(res)

const res2 = score2 >= 74 && score2 <= 100 ? "LULUS" : "TIDAK LULUS"
console.log(res2)

const res3 = car === "BMW" || car === "Toyota" ? "Car is awesome" : "Car is ugly"
console.log(res3)

console.log("231" == 231)
console.log("231" === 231)