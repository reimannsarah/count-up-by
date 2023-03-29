//Business Logic

function count(number1, number2) {
    const array = [];
    if (number1.length === 0 || number2.length === 0) {
        return "Please enter a number, bitch"
    } else if (number1 <= 0 || number2 <= 0) {
        return "No negative numbers allowed, baby"
    } else if (number2 > number1) {
        return "Please count up by a number less than the number you're counting to, braniac"
    }
    for (let i = 0; i <= number1; i += number2){
        array.push(i);
    }
    return array;
}

//UI Logic

// get our input values
// print output to div#output
function userInput(e) {
    e.preventDefault();
    const input1 = parseInt(document.querySelector("#numberOne").value);
    const input2 = parseInt(document.querySelector("#numberTwo").value);
    
    const results = count(input1, input2);
    displayAnswer(results);
}

function displayAnswer(output) {
    const div = document.querySelector("#output");
    const p = document.createElement("p");
    p.innerText = output.join(", ");
    div.append(p);
}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", userInput)
})