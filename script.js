console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let Turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return Turn === "X" ? "O" : "X";
};

const checkWin = () => {
    // win logic 
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7], 
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
       if( ( boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        isgameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
       }
    })
};

// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext"); 

    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = Turn;
            Turn = changeTurn(); 
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText =
            "Turn for " + Turn;
        }
    });
});

// Reset Button Function
document.getElementById("reset").addEventListener("click", () => {
    // Clear all boxes
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    
    // Reset game state
    Turn = "X";
    isgameover = false;
    document.querySelector('.info').innerText = "Turn for X";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
