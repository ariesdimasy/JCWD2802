function excel(str){
    // console.log("A".charCodeAt(0)) 65 
    // console.log("B".charCodeAt(0)) 66
    let result = 0
    let power = str.length - 1 // 2
    for(let i = 0; i < str.length; i++){
        result += (str[i].charCodeAt(0) - 64) * (26 ** power);
        power--
    }
    return result
}

console.log(excel("AA"))
console.log(excel("AB"))
console.log(excel("ZZ"))
console.log(excel("AAA"))

/*
    AB = A -> (1 * 26 ** 1 ) + (2 * 26 ** 0) = 28
    ZZ = Z -> (26 * 26 ** 1) + (2)
    Z = 26 *  26**0 

    Z = 26 ( 26 ** 1)
    ZZ =  AA --> ZZ (26 * 26)  
    ZZZ = AAA ---> ZZZ (26 * 26 * 26)

    AB = (1 * (26 ** 0) ) + (2 * (26 ** 1))
    
    AB = (1 * (26 ** 1)) + (2 * (26 ** 0))
       = 26 + 2 

    EF = (5 * (26 ** 1)) + (6 * (26 ** 0))

         ( x * (26 ** 2)) + (x * (26 ** 1)) + ( x * (26 ** 0))

*/