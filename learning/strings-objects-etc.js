//Declaring strings

let firstStr = "test";
console.log(firstStr);

//Concatinating strings
    //String literal

    let testStr = "This is an automated - ${firstStr}";
    console.log(testStr);

    //Concatenation using +

    let testStr2 = "This is certified " + firstStr + ".";
    console.log(testStr2);


//Multiline strings
    //Must use tilde - `
    let testStr3 = `This
    is
    a
    certified
    ${firstStr}`;

    console.log(testStr3);

//Methods
    // .length

    // .slice(start, end) - extracts part of string and returns it in a new string (First pos 0) (negative values count from end)
    // .substring(start, end) - ^^^ (Negative values = 0)
    //.substr(start, lenght) - SE

    //.replace("Word to find", "Word to replace with") - Replaces the first match! Does not chabge the string only returns a new one
        //Regular expressions can be used here fx:
            //newText = text.replace(/TEST/i, "complete") - the /i means case insensitivity
            // /TEST/g would replace all  (global match)
    
    //.toUpperCase()
    //.toLowerCase()

    //.concat(text1, text2)

    //.trim() - removes whitespaces from the sides
    //.trimStart() - removes whitespace from start of string
    //.padStart(numOfPadChar, "padChar") - pads the begginning of a string with re required charaters (string lenght is included in numOfPadChar)
    //.padEnd(numOfPadChar, "padChar") - SE

    //.charAt(index) - returns char at index
    //.charCodeAt(index) - returns unicode of char at index

    //.split("delimiter") - returns a array split by delimiter

//Conditionas

    //if, else, else if
let userName = prompt("Login:", "");

if (userName == "Admin") {
    let password = prompt("Password:", "");
    if (password == 1) {
        alert("Welcome");
    }
    else if (password == null || password == ""){
        alert("Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (userName == null || userName == "") {
    alert("Canceled");
}
else
    alert("EROOR: Invalid input");

//Logical operators
    // || OR  also stop when first frue value is reached:
        // true||aler("not printed")
    // && AND
    // ! NOT
    // !! - NOTNOT converts value to boolean type
