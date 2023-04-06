const board = document.querySelector('#board');
const box = document.querySelectorAll('.box');
const boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let player = 1;
let gameOver = false;

box.forEach((box, index) => {
    box.addEventListener('click', () => {
        setSymbols(index);
        console.log(index);
    });
});

function setSymbols (index){
    // console.log(index)
    let col = index % 3;
    let row = (index - col) / 3;
    
    if (boardData[row][col] === 0 && gameOver == false){

        boardData[row][col] = player; 
        // switching player 
        player *= -1;  
        // Update board with symbols
        drawSymbol();

        // checking game conditions
        check();
    }
    else {
        console.log("board pack xa");
    }
}

// creating the symbols on board
function drawSymbol() {
    
// iterating over rows
    for(let row = 0; row < 3; row++){
        // iterating over columns
        for(let col = 0; col < 3; col++){
            // checking player's turn
            if ( boardData[row][col] === 1){
                // update box class to add a symbol
                box[(row * 3) + col].classList.add('cross');
            }
            else if (boardData[row][col] === -1) {
                box[(row * 3) + col].classList.add('circle');
            }
        }
    }
}

// function to check results

function check() {
    // check rows and columns
    for( let i = 0; i < 3; i++) {
        let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
        let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];

        if ( rowSum === 3 || colSum === 3){
            // PLayer 1 wins
            // console.log("player 1 wins");
            gameComplete(1);
            return
        }

        else if (rowSum === -3 || colSum === -3){
             // PLayer 2 wins
            //  console.log("player 2 wins");
             gameComplete(2);
             return
        }
    }

    let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2]
    let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0]

    if ( diagonalSum1 === 3 || diagonalSum2 === 3){
        // PLayer 1 wins
        // console.log("player 1 wins");
        gameComplete(1);
        return
    }

    else if (diagonalSum1 === -3 || diagonalSum2 === -3){
         // PLayer 2 wins
        //  console.log("player 2 wins")
         gameComplete(2);
         return
    }


    // checking for tie

    if( boardData[0].indexOf(0) == -1 && boardData[1].indexOf(0) == -1 && boardData[2].indexOf(0) == -1) {
        console.log("tie");
        gameComplete(0);
        return
    }
}


// function to end game and display results
function gameComplete(winner) {

    // trigerring game over
    gameOver = true;
    outcome = document.querySelector('#outcome')
    // check if game is a tie
    if( winner === 0) {
        outcome.innerText = " It's a tie";
    }
    else {
        outcome.innerText = `Player ${winner} wins !!!`;
    }
}