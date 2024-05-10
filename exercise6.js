function calculateAge(birthDate){
    // console.log(new Date() - birthDate)
    // console.log(birthDate)
    return Math.floor((new Date() - birthDate) / (365 * 24 * 60 * 60 * 1000))
}

function calculateDataStudent(arrStudents){

    let result = {
        score:{
            highest:arrStudents[0].score,
            lowest:arrStudents[0].score,
            avg:0
        },
        age:{
            highest:calculateAge(arrStudents[0].birthDate),
            lowest:calculateAge(arrStudents[0].birthDate),
            avg:0
        }
    }

    let totalScore = 0
    let totalAge = 0

    
    for(let i = 0; i < arrStudents.length; i++) { 
        if(arrStudents[i].score > result.score.highest) { 
            
            result.score.highest = arrStudents[i].score
        }
        if(arrStudents[i].score < result.score.lowest){
            result.score.lowest = arrStudents[i].score
        }

        // console.log(calculateAge(arrStudents[i].birthDate))
        if(calculateAge(arrStudents[i].birthDate) > result.age.highest){
            result.age.highest = calculateAge(arrStudents[i].birthDate)
        }

        if(calculateAge(arrStudents[i].birthDate) < result.age.lowest){
            result.age.lowest = calculateAge(arrStudents[i].birthDate)
        }

        totalScore += arrStudents[i].score
        totalAge += calculateAge(arrStudents[i].birthDate)
    }

    let avgScore = Math.floor(totalScore / arrStudents.length)
    let avgAge = Math.floor(totalAge / arrStudents.length)

    result.score.avg = avgScore
    result.age.avg = avgAge

    return result

}

console.log(calculateDataStudent([
    {
        name:"Aries Dimas",
        email:"aries@purwadhika.com",
        birthDate:new Date("1992-10-10"),
        score:98
    },
    {
        name:"Firdaus",
        email:"firdaus@purwadhika.com",
        birthDate:new Date("1994-10-10"),
        score:89
    },
    {
        name:"Maulana",
        email:"maulana@purwadhika.com",
        birthDate:new Date("1995-10-10"),
        score:94
    },
    {
        name:"Tika",
        email:"tika@purwadhika.com",
        birthDate:new Date("1996-10-10"),
        score:90
    }
]))

class Product {
    // constructor(name, price){
    //     this.name = name
    //     this.price = price
    // }

    #name=""
    #price=0

    set setName(name){
        if(!name){
            return "name must be filled"
        }

        if(name.length <= 3){
            return "name mus be more than 3 chars"
        }
        this.#name = name
    }

    get getName(){
        return this.#name
    }

    set setPrice(price){
        this.#price = price
    }

    get getPrice(){
        return this.#price
    }

    static warehouse = []
}

let rtx3060 = new Product()
// rtx3060.setName("GPU RTX 3060 12GB msi")
rtx3060.setName = "GPU RTX 3060 12GB msi"
rtx3060.setPrice = 8000000

rtx3060.getName

let nzxtBlack = new Product()
nzxtBlack.setName = "NZXT tower matle black"
nzxtBlack.setPrice = 1500000

let monitor = new Product()
monitor.setName = "LG LED 27inch 265hz 4K "
monitor.setPrice = 4600000

let processor = new Product()
processor.setName = "intel i9 core 14  "
processor.setPrice = 9000000

// console.log(rtx3060.getName, rtx3060.getPrice)
Product.warehouse.push(rtx3060, nzxtBlack, monitor, processor)

console.log(Product.warehouse)

class Transaction { 
    #total = 0
    cart = []
    addToCart(product){
        this.cart.push(product)
        this.#total += product.total
    }
    get showTotal(){
        return this.#total
    }

    get checkOut(){
        return {
            cart:this.cart,
            total:this.#total
        }
    }
}

let transaction = new Transaction()
// transaction.cart.push({
//     name:Product.warehouse[0].getName,
//     price:Product.warehouse[0].getPrice,
//     qty:10,
//     total: Product.warehouse[0].getPrice * 10
// }, {
//     name:Product.warehouse[3].getName,
//     price:Product.warehouse[3].getPrice,
//     qty:15,
//     total: Product.warehouse[3].getPrice * 15
// })

transaction.addToCart({
    name:Product.warehouse[0].getName,
    price:Product.warehouse[0].getPrice,
    qty:10,
    total: Product.warehouse[0].getPrice * 10
})

transaction.addToCart({
    name:Product.warehouse[3].getName,
    price:Product.warehouse[3].getPrice,
    qty:15,
    total: Product.warehouse[3].getPrice * 15
})

console.log(transaction.cart)
console.log(transaction.showTotal)
console.log(transaction.checkOut)