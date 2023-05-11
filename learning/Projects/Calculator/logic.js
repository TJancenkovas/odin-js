// const buttonAdd = document.querySelector(`#add`);
// const buttonSubtract = document.querySelector(`#subtract`);
// const buttonMultiply = document.querySelector(`#multiply`);
// const buttonDivide = document.querySelector(`#divide`);
// const buttonEquals = document.querySelector(`#equals`);
// const buttonDot = document.querySelector(`#dot`)
// const buttonNumbers = document.querySelectorAll('button');


const buttons = document.querySelectorAll(`button`);
const input = document.querySelector(`.display`);

const operators = /[-+/*]/;

let boolOperationFinished = false;
let number1 = "";
let number2 = "";
let operation = "";

buttons.forEach(function(button) {
    button.addEventListener(`click`, function(operator) {
        let value = operator.target.textContent;
        

        //If it's equals we give result
        if(value == `=`) {
                if(operation == "") {
                    //do nothing
                }
                else {
                    number1 = getResult();
                }
            
        }
        else {
        passValue(value);
        }
        input.textContent = number1 + operation + number2;
        console.log(operation);
        return 0;
    })
})

const getResult = function() {
    let result;
    switch(operation) {
        case `+`:
            result = Number(number1) + Number(number2);
            break;
        case `-`:
            result = Number(number1) - Number(number2);
            break;
        case `*`:
            result = Number(number1) * Number(number2);
            break;
        case `/`:
            //Divide by zero check
            if (number2 == "0") {
                result = "Cool it buster!";
                break;
            }
            result = Number(number1) / Number(number2);
            break;                        
    }

    number2 = "";
    operation = "";
    //Deal with floats overflowing
    if(result % 1 != 0 && typeof(result) == `number`) 
        {
            result = parseFloat(result.toPrecision(9));
        }
    boolOperationFinished = true;
    return String(result);
}

const passValue = function(value) {
    //Check if number or operator
    if (value.match(operators)) {
        boolOperationFinished = false;
        //Make sure only one operator is available at a time
        if(number2 != "") {
            number1 = getResult();
        }
        operation = value;
        return 0;
    }
    else 
    {
        //Override number if after operation
        if(boolOperationFinished) {
            number1 = value;
            boolOperationFinished = false;
        }
        //Check to see if it's second or first number
        else if(operation == "") {
            //Prevent leading zeroes
            if(number1 == "") number1 = value;
            else number1 += value;
        }
        else {
            //Prevent leading zeroes
            if(number2 == "") number2 = value;
            else number2 += value;
        }
        return 0;
}

}

