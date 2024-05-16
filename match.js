// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    let result = []
    // batasan perulangan untuk result 
    let mid = Math.ceil(param.length / 2)
    for(let i = 0; i < mid; i++){
        let temp = [param[i]]
        if(param.length % 2 != 0 && i == mid - 1) { 
            temp.push("Instruktur")
        }else {
            temp.push(param[param.length - 1 - i])
        }

        result.push(temp)
    }

    return result
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]