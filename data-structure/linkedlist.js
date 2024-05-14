/*
    let mylinked = {
        head:{
            value:1,
            next:{
                value:2,
                next:{
                    value:3,
                    next:null
                }
            }
        }
    }

    let myLinked = {
        head:{
            value:element,
            next:{
                value:element,
                next:null
            }
        }
    }
*/
class Node { 
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList { 
    constructor(){
        this.head = null
        this.size = 0
    }

    printList(){
        let curr = this.head
        while(curr){
            console.log(curr.element)
            curr = curr.next
        }
    }

    insertAt(element, index){
        if(index < 0 || index > this.size){
            console.log("please eneter a valid index")
            return false
        }
    }

    add(element) { 
        let node = new Node(element)

        let current;

        if(this.head == null){
            this.head = node
        } else {
            current = this.head

            while(current.next){
                console.log("current next --> ", current.next)
                current = current.next
                
            }

            current.next = node 
        }
    }

    removeElement(element){
        let current = this.head
        let prev = null

        while(current != null){
            if(current.element == element){
                if(prev == null){
                    this.head = current.next
                } else {
                    prev.next = current.next
                }

                this.size -= 1

                return current.element
            }

            prev = current
            current = current.next
        }

        return null

    }
}

let mylinkedList = new LinkedList()
console.log(mylinkedList)

mylinkedList.add(1)

console.log(mylinkedList)

mylinkedList.add(2)

console.log(mylinkedList)

mylinkedList.add(3)

console.log(mylinkedList)

mylinkedList.printList()

mylinkedList.removeElement(2)

mylinkedList.printList()