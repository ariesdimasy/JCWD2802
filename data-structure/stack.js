class Stack { 
    #maxSize
    #container = []

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    getContainer(){
        return this.#container
    }

    push(item){
        if(this.#container.length <  this.#maxSize){
            this.#container.push(item)
        } else{
            console.log("STACK OVERFLOW")
        }
    }

    pop(){
        if(this.#container.length > 0){
            this.#container.pop()
        } else {
            console.log("Stack Underflow")
        }
    }
}

let obj = new Stack(4)

obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)

console.log(obj.getContainer())

obj.push(4)

obj.pop()
obj.pop()
obj.pop()
obj.pop()

console.log(obj.getContainer())

obj.pop()
