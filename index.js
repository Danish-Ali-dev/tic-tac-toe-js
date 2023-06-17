console.log("Welcome to Tic Tac Toe Game");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameOver.mpeg");
let gameMusic = new Audio("gameMusic.mpeg");
let turn = "X";
let isGameOver = false;

// Function to Change Turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
// Function to Check Win
const checkWin = () => {
    allTextBoxes = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((allTextBoxes[e[0]].innerText === allTextBoxes[e[1]].innerText) && (allTextBoxes[e[2]].innerText === allTextBoxes[e[1]].innerText) && (allBoxes[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = allTextBoxes[e[0]].innerText + " WON";
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            gameOver.play();
            setTimeout(() => {
                document.getElementsByTagName('body')[0].style.backgroundImage = 'url("celebration.gif")';
            }, 1000);
        }
    })
}

const gameDraw = () => {
    console.log('ok');
}

// Game Logic
// gameMusic.play();
let allBoxes = document.getElementsByClassName("box");
Array.from(allBoxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
        // else if (((values[0] == 'X  ') || (values[0] == '0')) && ((values[1] == 'X') || (values[1] == '0')) &&
        //     ((values[2] == 'X') || (values[2] == '0')) && ((values[3] == 'X') || (values[3] == '0')) && ((values[4] == 'X') || (values[4] == '0')) && ((values[5] == 'X') || (values[5] == '0')) && ((values[6] == 'X') || (values[6] == '0')) && ((values[7] == 'x') || (values[7] == '0'))
        //     && ((values[8] == 'X') || (values[8] == '0'))) {
        //     turn = '';
        //     document.getElementsByClassName("info")[0].innerText = 'Game Draw';
        //     gameDraw();
        // }
        else if (boxtext.innerText !== '' && isGameOver == false) {
            console.log('draw');
            gameMusic.play();
        }
    })
})

// Reset Functionality Logic
let reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    let textBoxes = document.querySelectorAll('.boxText');
    Array.from(textBoxes).forEach(element => {
        element.innerText = '';
    })
    turn = 'X';
    isGameOver = false;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByTagName('body')[0].style.backgroundImage = 'none';
    document.querySelector(".line").style.width = "0vw";
})