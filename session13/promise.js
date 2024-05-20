const tryPromise = new Promise((resolve, reject) => {
    let isError = false 
    if(!isError){
        resolve("sukses bro")
    } else {
        reject("gagal")
    }
})

tryPromise.then((res) => {
    console.log(" res => ", res)
    return tryPromise
})
.then((res) => {
    console.log(" res => ", res)
    return tryPromise
})
.then(() => {

})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("finish")
})