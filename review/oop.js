class BangunDatar {
    color=""
    constructor(color){
        this.color = color
    }
    luas(){
        return 2 * 2
    }

    keliling(){
        return 2 + 2
    }
}

class Persegi extends BangunDatar {
    sisi=0
    constructor(color){
        super(color)
    }
    luas(){
        return this.sisi * this.sisi
    }
    keliling(){
        return 4 * this.sisi
    }
}

class Lingkaran extends BangunDatar { 
    radiant=0
    constructor(color){
        super(color)
    }
    luas(){
        return Math.PI * this.radiant * this.radiant
    }
    keliling(){
        return 2 * Math.PI * this.radiant
    }
}

class BentukAbstract extends BangunDatar { 
    keliling(){
        return 3 + 5 + 7
    }
}

// method overriding
let objLing = new Lingkaran()
objLing.radiant = 14
objLing.color = "red"
console.log(objLing.keliling())
console.log(objLing.luas())

console.log(objLing)

let objAbs = new BentukAbstract()
console.log(objAbs.keliling())