
const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', () =>{
    playRPSToFive(button.textContent);
    })
})






function playRPSToFive (userInput) {
    //Get score value from html
    let userScore = Number(document.getElementById("user-score").textContent);
    let opponentScore = Number(document.getElementById("opponent-score").textContent);
    console.log(`US: ${userScore}    OS: ${opponentScore}`);

    //Check if userScore < 5 or opponentScore < 5
    if(userScore < 5 && opponentScore < 5) {
        //If yes playRPS with user input
        let outcome = playRPS(userInput);
        //Evaluete outcome and ammend the scores
        switch (outcome) {
            //User win case
            case 1: 
                userScore++;
                document.querySelector("#user-score").textContent = `${userScore}`;
                break;
            //User loose case
            case -1:
                opponentScore++;
                document.querySelector("#opponent-score").textContent = `${opponentScore}`;
                break;
            //Tie case
            case 0:
                break;
        }
    }  //Else alert the user about outcome and set the score to zero
    if (userScore === 5) {
        alert(`CONGRATULATIONS YOU ARE THE WINNER!`);
        resetScore();
    }
    else if (opponentScore === 5) {
        alert('FAILURE!');
        resetScore();
    }
};
       
function resetScore() {
    document.querySelector("#user-score").textContent = "0";
    document.querySelector("#opponent-score").textContent = "0"
};


function playRPS(userInput) {

    //Check if the input is in a string and get the corresponding selection number for the input
    if (typeof(userInput) ===  `string`) {
        userInput = getRPSChoice(userInput);
    }

    //Generate RPS choice (0 - rock, 1 - paper, 2 - scissors)
    let generatedRPS = getRPS();

    //Get the outcome of the game
    let outcome = getOutcome(userInput, generatedRPS);

    //Log the outcome
     logRPSUser(outcome,generatedRPS);
    
    return outcome;
}

function getRPS() {
    return Math.floor(Math.random() * 3);
}

function getRPSString(generatedRPS) {
    //Determines RPS choice in string form
    switch(generatedRPS) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }      
}

function alertRPSUser(score) {
    //Alerts the user about the outcome of the RPS game

    if (score === 0) {
        return alert(`It's a tie!`);
    }
    else if (score > 0) {
        return alert(`Congratulations you won!`);
    }
    else { 
        return alert(`Sorry you lost!`);
    }
}

function logRPSUser(outcome, generatedRPS) {
        //Determine generatedRPS in string form
    generatedRPS = getRPSString(generatedRPS);

    const resultsDiv = document.querySelector('#results')

    switch(outcome) {
        case 0: 
            resultsDiv.style.color = 'yellow';
            resultsDiv.textContent = `Tie. Opponent chose ${generatedRPS}`;
            break;
        case 1:
            resultsDiv.style.color = `green`;
            resultsDiv.textContent = `Win. Opponent chose ${generatedRPS}`;
            break;
        case -1:
            resultsDiv.style.color = 'red';
            resultsDiv.textContent = `Lose. Opponent chose ${generatedRPS}`;
            break;
    }
}

function getRPSChoice(textInput) {
    //returns the number to use in the playRPS function, when given text
    switch (textInput.toLowerCase()){
        case `rock`:
            return 0;
        case `paper`:
            return 1;
        case 'scissors':
            return 2;
        default:
            console.error('Invalid RPS input');
            break;
    }
};


function getOutcome(userInput,generatedRPS) {
    //Finds the outcome of the game 
        //Where :0 - tie; -1 - loss, 1 - win
    //If generated == user choice - tie
    if(userInput === generatedRPS) {
        return 0;
    }
    //Else switch between user choices
    else {
        switch(userInput) {
        //Case - user chooses 0
            case 0: 
            //If generated == 1 loose (return lose)
            //Else win (return win)
                return generatedRPS === 1 ? -1: 1; 
  
        ///Case user chooses 1
            case 1:
            //If generated == 2 loose (retunr lose)
            //Else win (return win)
                return generatedRPS === 2 ? -1 : 1;

        //Case user chooses 2
            case 2:
            //If generated == 0 (return lose)
            //Else win (retunr lose)
                return generatedRPS === 0 ? -1 : 1;
        }
    }

}