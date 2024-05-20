// console.log(1)
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => {
//     return res.json()
// })
// .then((res) => {
//     console.log(res[0])
// })

// console.log(2)
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => {
//     return res.json()
// })
// .then((res) => {
//     console.log(res[0])
// })

// console.log(3)

async function sequence(){
    console.log(1)
    const process1 = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        return res.json()
    })
    console.log(process1[0])

    console.log(2)
    const process2 = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        return res.json()
    })
    console.log(process2[0])
   
    console.log(3)
}

async function myFetchData () {
    try{
        const myFetch = await fetch("https://jsonplaceholder.typicode.co/posts")
        const json = await myFetch.json()
        console.log(json[0])
    } catch(err){
        console.log(" err => Something wrong ")
    }
   
}

// sequence()

myFetchData()