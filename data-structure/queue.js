class Queue { 
    #container = []
    
    enqueue(item){
        this.#container.push(item)
    }

    dequeue(){
        this.#container.shift()
    }

    getContainer(){
        return this.#container
    }
}

let q = new Queue()

q.enqueue(1)
q.enqueue(2)

console.log(q.getContainer())