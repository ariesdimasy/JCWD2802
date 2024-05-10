function calculateAge(birthDate){
    // console.log(new Date() - birthDate)
    // console.log(birthDate)
    return Math.floor((new Date() - birthDate) / (365 * 24 * 60 * 60 * 1000))
}

function calculateDataStudent(arrStudents){

    let result = {
        score:{
            highest:arrStudents[0].score,
            lowest:arrStudents[0].score,
            avg:0
        },
        age:{
            highest:calculateAge(arrStudents[0].birthDate),
            lowest:calculateAge(arrStudents[0].birthDate),
            avg:0
        }
    }

    let totalScore = 0
    let totalAge = 0

    
    for(let i = 0; i < arrStudents.length; i++) { 
        if(arrStudents[i].score > result.score.highest) { 
            
            result.score.highest = arrStudents[i].score
        }
        if(arrStudents[i].score < result.score.lowest){
            result.score.lowest = arrStudents[i].score
        }

        // console.log(calculateAge(arrStudents[i].birthDate))
        if(calculateAge(arrStudents[i].birthDate) > result.age.highest){
            result.age.highest = calculateAge(arrStudents[i].birthDate)
        }

        if(calculateAge(arrStudents[i].birthDate) < result.age.lowest){
            result.age.lowest = calculateAge(arrStudents[i].birthDate)
        }

        totalScore += arrStudents[i].score
        totalAge += calculateAge(arrStudents[i].birthDate)
    }

    let avgScore = Math.floor(totalScore / arrStudents.length)
    let avgAge = Math.floor(totalAge / arrStudents.length)

    result.score.avg = avgScore
    result.age.avg = avgAge

    return result

}

console.log(calculateDataStudent([
    {
        name:"Aries Dimas",
        email:"aries@purwadhika.com",
        birthDate:new Date("1992-10-10"),
        score:98
    },
    {
        name:"Firdaus",
        email:"firdaus@purwadhika.com",
        birthDate:new Date("1994-10-10"),
        score:89
    },
    {
        name:"Maulana",
        email:"maulana@purwadhika.com",
        birthDate:new Date("1995-10-10"),
        score:94
    },
    {
        name:"Tika",
        email:"tika@purwadhika.com",
        birthDate:new Date("1996-10-10"),
        score:90
    }
]))