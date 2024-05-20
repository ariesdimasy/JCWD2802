function romanNumeral(str){
    let obj = {
        I:1,
        IV:4,
        V:5,
        IX:9,
        X:10,
        XL:40,
        L:50,
        XC:90,
        C:100,
        CD:400,
        D:500,
        CM:900,
        M:1000
    }

    let result = 0

    for(let i = 0; i < str.length; i++){
        //console.log(obj[str[i]])
        // result += obj[str[i]]
        if(obj[str[i]] < obj[str[i+1]]){
           
            result += obj[str[i]+str[i+1]]
            i += 1
            //console.log(str[i]," - ", obj[str[i]], "if result ", result)
        } else {
            result += obj[str[i]]
            //console.log(str[i]," - ", obj[str[i]],"else result => ", result)
        }
    }

    return result
}

console.log(romanNumeral("XIXIV"))
console.log(romanNumeral("MCMXCIV"))