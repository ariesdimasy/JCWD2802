class LivingThing {
    name=""
    blood=true
    constructor(name, blood){
        this.name = name
        this.blood = blood
    }
    move(){
        console.log("move")
    }
}

class Human extends LivingThing {
    bone=true
    constructor(name, blood){
        super(name, blood)
    }
}

class Animal extends LivingThing{
    constructor(){
        super()
    }
}

let dimas = new Human("Dimas",true)

console.log(dimas)

console.log(dimas instanceof Human)
console.log(dimas instanceof LivingThing)
console.log(dimas instanceof Animal)