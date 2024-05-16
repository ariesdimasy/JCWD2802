function soal3(param)
{
    let result = {}
    for(let i = 0; i < param.length; i++){
        // param[i][0] = ""
        // !result["A"]
        if(!result[param[i][0]]){
            result[param[i][0]] = []
            // result["A"] = []
            
        }
        result[param[i][0]].push(param[i])
        // result["A"].push("Ayam")
    }

    return result
}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    [
        ['Ayam'],
        ['Bebek','Babi'],
        ['Cacing','Curut'],
        ['Kucing'],
        ['Monyet'],
        ['Sapi']
    ]
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/