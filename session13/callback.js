let list = [
    {name:"Iphone 12", price:11000000},
    {name:"Itel",price:1200000},
    {name:"Samsung Note 20", price:13000000}
]

let money = 20000000

function buy(money,item, callback){
    console.log("anda telah membeli ", item.name, " seharga : ", item.price)
    console.log("sisa uang anda : ", money - item.price)
    console.log('--------------------------------')
    if(callback){
        callback(money-item.price)
    }
}

 function buy2(money, item) {
    return  new Promise((resolve, reject) => {
        if(money >= item.price){
            
            resolve({
                item:item,
                moneyLeft:money - item.price
            })
        } else {
            reject("Bokek bos")
        }
    })
}

// buy(money, list[0],function(moneyLeft){
//     buy(moneyLeft, list[1],(moneyLeft) => {
//         buy(moneyLeft,list[2],(moneyLeft) => {
//             buy(moneyLeft,list[2],() => [
//                 buy(moneyLeft,list[2])
//             ])
//         })
//     })
// })

buy2(money, list[0])
.then((res) => {
    console.log("anda telah membeli ", res.item.name, " seharga : ", res.item.price)
    console.log("sisa uang anda : ", res.moneyLeft)
    console.log('--------------------------------')
    return buy2(res.moneyLeft, list[1])
})
.then((res) => {
    console.log("anda telah membeli ", res.item.name, " seharga : ", res.item.price)
    console.log("sisa uang anda : ", res.moneyLeft)
    console.log('--------------------------------')
    return buy2(res.moneyLeft, list[2])
})
.then(res => {
    console.log("anda telah membeli ", res.item.name, " seharga : ", res.item.price)
    console.log("sisa uang anda : ", res.moneyLeft)
    console.log('--------------------------------')
})
.catch((err) => {
    console.log(err)
})
