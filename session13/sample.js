// console.log(2)


// console.log(3)

function foo(x,y, callback) {
    callback()
}


foo(1,2,() => {

})

function myTimeOut(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done in : "+(time / 1000)+" seconds ")
        },time)
    })
}

// myTimeOut(3000)
// .then(res => {
//     console.log("time's up")
//     console.log(res) // 
//     return myTimeOut(10000)
// })
// .then(res => {
//     console.log("time's up again")
//     console.log(res) // 
// })

async function sequence(){
    console.log("TASK 1")
    const to1 = await myTimeOut(3000)
    console.log(to1)
    console.log("TASK 2")
    const to2 = await myTimeOut(2000)
    console.log(to2)
}

sequence()
