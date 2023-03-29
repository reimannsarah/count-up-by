//Business Logic

function count(number1, number2) {
    const array = [];
    if (number1.length === 0 || number2.length === 0){
        return "Please enter a number, bitch"
    }
    for(let i=0; i<=number1; i+=number2)
    {
        array.push(i);
    }
    return array;
}

//UI Logic