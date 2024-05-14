let myMap = new Map()

myMap.set("name","David")
myMap.set("age",20)

console.log(myMap)
console.log(myMap.size)

for(let [key, value] of myMap){
    console.log(key," --> ", value)
}