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
        board[i][j] = items[n].value
    }
    console.log(board)
}



function solve(){
    loadBoard()
    
}