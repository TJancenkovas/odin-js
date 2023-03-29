function game(userInput) {
    console.log("Game start:");
    //Make sure we get an int
    userInput = parseInt(userInput);

    //Create score into to keep the score
    let score = 0;

    //Play for 5 times
    for (let i = 0; i < 5; i++) {
        score += playRPS(userInput)
    }
    console.log("Game end.");
    //Return the result of the game
    return alertRPSUser(score);
}

function playRPS(userInput) {

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
    switch(outcome) {
        case 0: 
            return console.log(`Tie. Opponent chose ${generatedRPS}`);
        case 1:
            return console.log(`Win. Opponent chose ${generatedRPS}`);
        case -1:
            return console.log(`Lose. Opponent chose ${generatedRPS}`);
    }
}

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