//Function exercises:

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}

function checkAgeOR(age) {
    return ((age > 18) || confirm('Did parents allow you?'));
}

function checkAgeQm(age) {
    return ((age < 18) ? true : confirm('Did parents allow you?'));
}

function findMin(num1, num2) {
    return(num1 < num2 ? num1 : (num1 > num2 ? num2 : "Equal"));
}

function findPow(num, pow) {
    let newNum = num
    for (let i = 0; i < pow; i++) {
        newNum = newNum * num;
    }
    return newNum
}

//Function declaration vs function expressions

//Function declaration
    //Not executed inline with code. Executed at the sart of JS file.
function funcName() {
    //Code goes here
}

//Function expression
    //Executed inline with code, not accesible beforehand
function funcName() {
    //Code goes here
}

//When put inside if statements function declaration DOES NOT work.


//Arrow functions
    //Usually used when passing functionas as arguments.
let func = (arg1, arg2, argN) => true //expression to retrn;

let sum1 = (a, b) => a + b;

let sum2 = (a,b) => {
    let result = a + b;
    return result;
} //for multiline arrow functions

//TASK

let ask = (question,yes,no) => confirm(question) ? yes() : no();



