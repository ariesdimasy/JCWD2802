class Employee { 
    name=""
    workHours=0
    salary=0

    cheap=0
    expensive=0

    constructor(name, cheap, expensive){
        this.name = name
        this.cheap = cheap
        this.expensive = expensive
    }

    addWorkingHour(hours){
        this.workHours += hours
    }

    calculateSalary(){
       if(this.workHours > 6){
        this.salary = 6 * this.expensive
        this.salary += (this.workHours - 6) * this.cheap
       }else {
        this.salary = this.workHours * this.expensive
       }
    }
}

class FulltimeEmployee extends Employee {
    
    constructor(name){
        super(name, 75000, 100000)
    
    }
}

class ParttimeEmployee extends Employee {
    constructor(name){   
        super(name, 30000, 50000)
    }
}

let dimas = new FulltimeEmployee("Dimas")
dimas.addWorkingHour(3)
dimas.addWorkingHour(8)
dimas.calculateSalary()

console.log(dimas)

let rian = new ParttimeEmployee("Rian")
rian.addWorkingHour(7)
rian.calculateSalary()

console.log(rian)