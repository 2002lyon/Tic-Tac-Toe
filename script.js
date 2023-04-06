const board = document.querySelector('#board');
const box = document.querySelectorAll('.box');
const boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let player = 1;

box.forEach((box, index) => {
    box.addEventListener('click', () => {
        setSymbols(index);
        // console.log(index);
    });
});

function setSymbols (index){
    // console.log(index)
    let col = index % 3;
    let row = (index - col) / 3;
    
    if (boardData[row][col] == 0){
        boardData[row][col] = player;
        player *= -1;
        // console.log(winningBet);
        drawSymbol();
    }
    else {
        console.log("mildaina");
    }
}

// creating the symbols on board
function drawSymbol() {
    
// iteratiin over rows
    for(let row = 0; row < 3; row++){
        // iteratiin over columns
        for(let col = 0; col < 3; col++){
            if ( boardData[row][col] === 1){
                // update box class to add a cross
                box[(row * 3) + col]
            }
        }
    }
}