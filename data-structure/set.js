let fruits = ["nika","toro","neko","nikyu","tori","nikyu"]

let newFruits = new Set(fruits)

console.log(newFruits)
console.log(newFruits.delete("toro"))

console.log(newFruits)

newFruits.add("nika")

console.log(newFruits)