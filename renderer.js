var board = 
[
    [0, 0, 0,    0, 0, 0,    0, 0, 0],
    [0, 0, 0,    0, 0, 0,    0, 0, 0],
    [0, 0, 0,    0, 0, 0,    0, 0, 0],

    [0, 0, 0,    0, 0, 0,    0, 0, 0],
    [0, 0, 0,    0, 0, 0,    0, 0, 0],
    [0, 0, 0,    0, 0, 0,    0, 0, 0],

    [0, 0, 0,    0, 0, 0,    0, 0, 0],
    [0, 0, 0,    0, 0, 0,    0, 0, 0],
    [0, 0, 0,    0, 0, 0,    0, 0, 0],

]

const solveButton = document.getElementById('solve')
solveButton.addEventListener('click', solve)


function loadBoard(){
    const items = document.getElementsByClassName('form-control')
    for (let n=0; n<81; n++){
        let i = Math.floor(n/9);
        let j = n % 9

        if(items[n].value != '')
            board[i][j] = Number(items[n].value)
    }
    console.log(board)
}



function solve(){
    loadBoard()
    solveRecursive(8,8)
    console.log('solved!')
    console.log(board)
    
    function isInRow(x, i){
        for(let j=0; j<9; j++){
            if(board[i][j] == x)
                return true
        }
        return false
    }

    function isInColumn(x, j){
        for(let i=0; i<9; i++){
            if(board[i][j] == x)
                return true
        }
        return false
    }

    function solveRecursive(i, j){
        //termino?
        if(i<0)
            return true
        //caso casilla con valor fijo
        if(board[i][j] > 0){
            return j==0? solveRecursive(i-1, 8):solveRecursive(i, j-1)
        }else{
            //caso normal, buscar valor
            for(let n=1; n<10; n++){
                if(!isInRow(n, i) && !isInColumn(n, j)){
                    board[i][j] = n
                    let res = j==0? solveRecursive(i-1, 8):solveRecursive(i, j-1)
                    if(res){
                        return true
                    }
                    board[i][j] = 0
                }
            }
            return false
        }
    }
}