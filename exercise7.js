function factorial(num){
    if(num == 0){
        return 1
    } else {
        return num * factorial(num-1)
    }
}

console.log(factorial(5))
console.log(factorial(10))

function switchObj (arr) {
    let result = []
    for (let item of arr){
        //console.log(" item --> ", item)
        let newObj = {} //{ david: 'name'}  
        for(let key in item){
            // item[key] --> david
            console.log("item in object ---> ",key,item[key],' - ', item)
            newObj[item[key]] = key // name
        }
        result.push(newObj)
    } 

    return result
}

console.log(switchObj([ 
    {name:'david', age:20}, 
    {name:"noah", age:95}
]))

function mergeArray(arr1, arr2){
    let merged = [...arr1, ...arr2]
    console.log(merged)
    let result = []

    for(let i = 0; i < merged.length; i++){
        let flag = true
        for(let j = i+1; j < merged.length; j++){
            if(i != j && merged[i].name == merged[j].name) { 
                flag = false 
                break
            }
        }

        // true 
        if(flag){
            result.push(merged[i])
            
        }
    }

    return result
}

console.log(mergeArray([
    { name: 'Student 1', email : 'student1@mail.com'  }, 
    { name: 'Student 2', email : 'student2@mail.com'  },
    { name: 'Student 1', email : 'student1@mail.com'  }, 
],[
    { name: 'Student 1', email : 'student1@mail.com'  }, 
    { name: 'Student 3', email : 'student3@mail.com'  },
    { name: 'Student 1', email : 'student1@mail.com'  }, 
]))

function checkEqual(obj1, obj2){

    if(typeof obj1 === 'object'){
        let flag = true 
        for(let key in obj1){
            if(!obj2[key] || obj1[key] != obj2[key]){
                flag = false 
                break 
            }
        }

        return flag
    }
    return obj1 === obj2
}

console.log(checkEqual({a:2},{a:1}))
console.log(checkEqual({a:2},{a:2}))
console.log(checkEqual({a:2},{a:1}))
console.log(checkEqual({a:1, b:3},{a:1, b:3}))
console.log(checkEqual('hello','hello'))
console.log(checkEqual({ a: 'hello'},{a : 1}))

function test(){
    let counter = 0
    for(let i = 0; i < 10; i+= 3){
        counter += 6
    }

    return counter
}

console.log(test())

//