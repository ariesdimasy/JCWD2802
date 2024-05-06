let nums = [1,2,3,4,5,6]
console.log(nums)
nums[2] = 90
console.log(nums)
nums[6] = 67
nums[7] = 80
console.log(nums)
console.log(nums.length)
console.log(nums[nums.length-1])

let stand1 = {
    master:'polnaref',
    name:"silver chariot",
    power:100
}

let stand2 = {
    master:"joseph joestar",
    name:"hermit purple",
    power:70
}

let stand3 = {
    master:"jotaro kujo",
    name:"Star platinum",
    power: 300
}

let stands = []
stands.push(stand1)
stands.push(stand2)

console.log(stands)

stands.unshift(stand3)

console.log(stands)

let anotherStands = [{
    name:"Sethan",
    master:"alessi",
    power:60
}]

let result = stands.concat(anotherStands)

console.log(result)

console.log(result.map(item => {
    return {
        stand_name:item.name,
        stand_master:item.master
    }
}))

console.log(nums)

console.log(nums.map(function(item, index){
    // console.log(index)
    return {
        value: item * index
    }
}))


let words = ["fujimi","furofushi","stand power"]
let words2 = "fujimi,furofushi,stand power"
console.log(words.join(","))
console.log(words2.split(","))

for (item of stands){
    console.log(item.master)
}

for(item of words){
    console.log(item)
}

for(let i =0; i< nums.length;i++){
    console.log(nums[i])
}

