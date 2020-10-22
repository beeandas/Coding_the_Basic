let userScore = 0;
let computerScore = 0;
const userScore_spam = document.getElementById("user-score");
const computerScore_spam = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choice = ['r','s','p'];
    const randomNo = Math.floor(Math.random()*3);
    return choice[randomNo];
}
console.log(getComputerChoice());

function convertToWord(letter) {
    if (letter === "r") return "Rock" ;
    if (letter === "s") return "Scissors" ;
    return "Paper";

}

function win(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice)
    userScore ++;
    userScore_spam.innerHTML = userScore ;
    computerScore_spam.innerHTML = computerScore ;
    
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  beats  ${convertToWord(computerChoice)} ${smallCompWord}. You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow')  , 400)

}

function loose(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const computerChoice_div = document.getElementById(userChoice)
    computerScore ++;
    userScore_spam.innerHTML = userScore ;
    computerScore_spam.innerHTML = computerScore ;
    
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  loses to  ${convertToWord(computerChoice)} ${smallCompWord}. You Lost...`;
    computerChoice_div.classList.add('red-glow');
    
    setTimeout(() => computerChoice_div.classList.remove('red-glow') , 400)


}

function draw(userChoice,computerChoice) {
   
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord}  equals to  ${convertToWord(computerChoice)} ${smallCompWord}. Its a Draw <:)`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('grey-glow') , 400)

}





function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "sp" :
        case "pr" :
        case 'rs' :
            win(userChoice,computerChoice);
            break;
        case "rp" :
        case "ps" :
        case 'sr' :
            loose(userChoice,computerChoice);
            break;
        case "rr" :
        case "pp" :
        case 'ss' :
            draw(userChoice,computerChoice);
            break;


    }
}

game("c");

function main() {

    rock_div.addEventListener('click' , ()=>
        game("r")
    )

    paper_div.addEventListener('click' , ()=>
        game("p")
    )

    scissor_div.addEventListener('click' , () =>
        game("s")
    )

}
main();







