function stairCase(n){
    let firstSC = 1
    let secondSC = 2
    for(let i = 3; i <= n; i++){
        let temp = secondSC
        secondSC = firstSC + secondSC
        firstSC = temp
        console.log(i,' => ',firstSC, " --> ", secondSC)
    }

    return secondSC

}

console.log(stairCase(5))
console.log(stairCase(11))

/*
0. 0

1. 1

2 anak tangga 
2 kombinasi 

3 anak tangga 
3 kombinasi 

4 anak tangga

1. 1 + 1 + 1 + 1
2. 2 + 2
3. 1 + 2 + 1
4. 1 + 1 + 2 
5. 2 + 1 + 1

5 anak tangga 

1. 2 + 2 + 1
2. 2 + 1 + 1 + 1
3. 2 + 1 + 2
4. 1 + 2 + 2
5. 1 + 1 + 1 + 2
6. 1 + 1 + 1 + 1 + 1
7. 1 + 2 + 1 + 1
8. 1 + 1 + 2 + 1

6. 
13

7.
21

8. 34

9. 55

10. 89

11. 144



*/