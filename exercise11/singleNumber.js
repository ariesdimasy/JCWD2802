function singleNumber(arr){
    for(let i = 0; i < arr.length; i++){
        let flag = true // sendiri 
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i]," == ", arr[j], " and ",i, " == ",j)
            if(arr[i] == arr[j] && i != j){
                flag = false // double 
                break
            }
        }
        console.log(' -------------------- ')
        if(flag){
            return arr[i]
        }
        
    }

    return -1
}

console.log(singleNumber([2,1,2,1,3]))

/*
 
[2,1,2,1,3]

[2,1,2,1,3]

result 

flag = 'jomblo'

--> 2 1
    0    2
--> 2 == 2
flag = 'tidak jomblo'
break 

--> 1 == 2
    1 == 2

    1    3 
    1 == 1
flag = 'tidak jomblo'
break
    2    0
--> 2 == 2
break 

--> 1 == 2
    1 == 1
break

flag = 'jomblo'
--> 3 == 2
    3 == 1
    3 == 2
    3 == 1

jika flag masih jopmblo 
return angka jomblo nya 
*/
