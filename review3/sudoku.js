function checkRow(board, coor, value){
    // 
    for(let i = 0; i < board.length; i++){
        if(board[coor[0]][i] == value){
            return false
        }
    }

    return true
}

function checkColumn(board, coor, value) { 
    for(let j = 0; j < board.length; j++){
        if(board[j][coor[1]] == value){
            return false
        }
    }

    return true
}

function checkSudoku(board, coor, value){

    if(!checkRow(board, coor, value)){
        return false
    }

    if(!checkColumn(board, coor, value)){
        return false
    }

    return true

}

console.log(checkSudoku([
    //0 1 2 3 4 5 6 7 8
     [1,0,0,0,0,0,0,4,0],// 0
     [0,2,0,0,0,0,0,0,0],// 1
     [0,0,3,0,0,0,5,1,0],// 2
     [0,0,0,4,0,0,0,0,0],// 3
     [0,0,0,0,5,0,0,0,0],// 4
     [0,1,0,3,0,6,0,0,0],// 5
     [0,0,2,0,0,0,7,0,0],// 6
     [0,0,0,0,0,0,0,8,0],// 7
     [0,0,0,0,0,0,0,0,9],// 8
 ],[1,2], 4))

 console.log(checkSudoku([
    //0 1 2 3 4 5 6 7 8
     [1,0,0,0,0,0,0,4,0],// 0
     [0,2,0,0,0,0,0,0,0],// 1
     [0,0,3,0,0,0,5,1,0],// 2
     [0,0,0,4,0,0,0,0,0],// 3
     [0,0,0,0,5,0,0,0,0],// 4
     [0,1,0,3,0,6,0,0,0],// 5
     [0,0,2,0,0,0,7,0,0],// 6
     [0,0,0,0,0,0,0,8,0],// 7
     [0,0,0,0,0,0,0,0,9],// 8
 ],[1,2], 3))

 