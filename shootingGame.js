class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem(){
        let rand = Math.floor(Math.random() * 2)

        if(rand == 0){
            return { health:10, power:0}
        } else {
            return { health:0, power:10}
        }
    }

    start(){
        // giliran , siapa nembak siapa 
        // atk adalah penembak
        // def adalah yg ditembak
        // atk dan def bisa berubah 
        let atk = this.player1
        let def = this.player2
        while(this.player1.health > 0 && this.player2.health > 0){
            // generate item , yg mana nantinya di terima player
            let item1 = this.getRandomItem()
            let item2 = this.getRandomItem()
           
             // saat player menerima item
             // item1 untuk player1
             // item2 untuk player2
            this.player1.useItem(item1)
            this.player2.useItem(item2)

            // tujuannya biar tau masing - masing status steleah mendapatkan item
            console.log(" ---- after GET item ---- ")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log(" ---- after GET item ---- ")

            // giliran , siapa nembak siapa
            // gak bisa player1 nembak player2
            // player2 nembak player1
            // dalam 1 giliran
            def.damage(atk.power) // SHOOT
            
            // menunjukan status setelah shoot 
            console.log(" ---- after shoot ---- ")
            this.player1.showStatus()
            this.player2.showStatus()
            console.log(" ---- after shoot ---- ")

            console.log(" =========== end turn ============ ")

            // logika untuk mengganti giliran penyerang dan bertahan 
            // kalau penyerang(atk) adalah player1 maka ganti atk menjadi player2
            if(atk.name == this.player1.name) {
                atk = this.player2
                def = this.player1
            } else {
                atk = this.player1
                def = this.player2
            }
        }

        if(this.player1.health > 0){
            console.log(this.player1.name ," WIN ")

        } else {
            console.log(this.player2.name ," WIN ")
        }
        // this.player1.showStatus()
        // this.player2.showStatus()
    }
}

class Player {
    name=""
    health=100
    power=10
    constructor(name){
        this.name = name
    }

    damage(power){
        this.health -= power
    }

    useItem(item){
        this.health += item.health
        this.power += item.power
    }

    showStatus(){
        console.log(this.name ," health = ", this.health)
        console.log(this.name ," power = ", this.power)
    }
}

let player1 = new Player("Jotaro")
let player2 = new Player("Dio")

console.log(player1)
console.log(player2)

let arena1 = new ShootingGame(player1, player2)

arena1.start()