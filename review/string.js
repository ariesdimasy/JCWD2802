let str = "Lorem Ipsum"
console.log(str[2])
str[2] = "E"
console.log(str[2])

let name = "dimas"
let name2 = name
name = "rian"
console.log(name2, name)

/*
L
o
r
e
m
*/

console.log(str[0])
console.log(str[1])
console.log(str[2])

let j = 0
for(let i = 0; i < str.length; i++){
    console.log(str[i])
    j = i
}
// console.log(i)//11
console.log(j)

let a = "a"
a += "b"
a += "c"
a += "d"
console.log(a)

let star = "*"
star += "*"
star += "*"
star += "*"
console.log(star)

let box = 3

for(i = 0; i < box; i++){
    let result = ""
    for(let j = 0; j < box; j++){
        result += "*"
    }
    console.log(result)
}

/*
*
**
***
****
*/
let box2 = 4  

for(let i = 0; i < box2; i++){
    let result2 = ""
    result2 += "*"
    console.log(result2)
}

let myname = "dimas"

// let statement = "hello "+myname+" welcome to new world"
let statement = `hello ${myname} , welcome to new world.
you can do whatever`

console.log(statement)

/*
n = 5
    *        5 
   ***      456
  *****    34567
 *******  2345678
*********123456789

n = 6
     *          6 
    ***        56
   *****      45667
  *******    2345678
 *********  123456789
***********
*/

function pyramid(n){
    for(let i = 1; i <= n; i++){
        let str = ""
        for(let j = 1; j <= n+i-1; j++){
            if(j <= n - i){
                str += " "
            } else {
                str += "*"
            }
        }
        console.log(str)
    }
}

pyramid(5)

pyramid(7)






