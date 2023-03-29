function playRPS(userInput) {
    //Make sure we get an int
    userInput = parseInt(userInput);
    //Generate RPS choice (0 - rock, 1 - paper, 2 - scissors)
    let generatedRPS = getRPS();

    //Get the outcome of the game in string from
    let outcome = getOutcome(userInput, generatedRPS);

    //Alert user about the outcome
    alertRPSUser(outcome,generatedRPS);

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

function alertRPSUser(outcome, generatedRPS) {
    //Alerts the user about the outcome of the RPS game
    //Determine generatedRPS in string form
    generatedRPS = getRPSString(generatedRPS);
    switch(outcome) {
        case `tie`: 
            alert(`It's a tie! Opponent chose ${generatedRPS}`);
        break;
        case `win`:
            alert(`Congratulations you won! Opponent chose ${generatedRPS}`);
        break;
        case `lose`:
            alert(`Sorry you lost! Opponent chose ${generatedRPS}`);
        break;
    }
}

function getOutcome(userInput,generatedRPS) {
    //Finds the outcome of the game
    //If generated == user choice - tie
    if(userInput === generatedRPS) {
        return `tie`;
    }
    //Else switch between user choices
    else {
        switch(userInput) {
        //Case - user chooses 0
            case 0: 
            //If generated == 1 loose (return lose)
            //Else win (return win)
                return generatedRPS === 1 ? `lose`: `win`; 
  
        ///Case user chooses 1
            case 1:
            //If generated == 2 loose (retunr lose)
            //Else win (return win)
                return generatedRPS === 2 ? `lose` : `win`;

        //Case user chooses 2
            case 2:
            //If generated == 0 (return lose)
            //Else win (retunr lose)
                return generatedRPS === 0 ? `lose` : `win`;
        }
    }

}