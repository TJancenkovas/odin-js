// const buttonAdd = document.querySelector(`#add`);
// const buttonSubtract = document.querySelector(`#subtract`);
// const buttonMultiply = document.querySelector(`#multiply`);
// const buttonDivide = document.querySelector(`#divide`);
// const buttonEquals = document.querySelector(`#equals`);
// const buttonDot = document.querySelector(`#dot`)
// const buttonNumbers = document.querySelectorAll('button');


const buttons = document.querySelectorAll(`button`);
const input = document.querySelector(`.display`);
let number1 = "";
let number2 = "";
let operation = "";

buttons.forEach(function(button) {
    button.addEventListener(`click`, function(operator) {
        let value = operator.target.textContent;
        let equation = input.textContent;
        

        //If it's equals we give result
        if(value == `=`) {
            number1 = getResult();
        }
        else {
        passValue(value, equation);
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
            result = Number(number1) / Number(number2);
            break;                        
    }

    number2 = "";
    operation = "";
    return String(result);
}

const passValue = function(value, equation) {
    //Check if number or operator
    if (isNaN(value)) {
        //Make sure only one operator is available at a time
        if(number2 != "") {
            number1 = getResult();
            return 0;
        }
        else {
            operation = value;
            return 0;
        }
    }
    else 
    {
            //Check to see if it's second or first number
        if(operation == "") {
            number1 += value;
        }
        else {
            number2 += value;
        }
        return 0;
}

}

