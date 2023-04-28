const allClear = document.getElementById('allclear');
const equalBtn = document.getElementById('equal');
const decimalBtn =  document.getElementById('decimal');
const deleteBtn = document.getElementById('delete');
const operators = document.querySelectorAll('.operators');
const numbers = document.querySelectorAll('.number');
const firstOperand = document.querySelector('#first-operand');
const secondOperand = document.querySelector('#second-operand');

let firstNumber = 0;
let secondNumber = 0;
let operator = null;
let finalNumber = null;

secondOperand.innerText = 0;


function showNumber(button){

    firstNumber = Number(firstNumber + button.innerText);

    secondOperand.innerText = firstNumber;
}

function showDecimal(){

    if(!firstNumber.toString().includes('.')){
        firstNumber += '.';
    }

    return secondOperand.innerText = firstNumber;
}

function deleteAll(){
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    finalNumber = null;
    secondOperand.innerText = 0;
    firstOperand.innerText = null;
}

function deleteOne(){

    firstNumber =  firstNumber.toString().slice(0, -1);
    
    return secondOperand.innerText = firstNumber;
}

function showOperator(button){

    if((operator !== null) && (firstNumber === 0)){
        firstNumber = 0;

    }else if(operator === null){
        secondNumber = firstNumber + finalNumber;

        firstNumber = 0;
        operator = button.innerText;
        firstOperand.innerText = secondOperand.innerText + " " + button.innerText;
        secondOperand.innerText = firstNumber;
    }else{

    }

}

function showEquals(){

    if(operator === null){
        return firstNumber;
    }else{

    finalNumber = operate(secondNumber, firstNumber, operator);

    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    secondOperand.innerText = null;
    firstOperand.innerText = null;
    secondOperand.innerText = finalNumber;

    }

}

function operate(a, b, operand){

    if(operand === "+"){
        return a + b;
    }else if(operand === "-"){
        return a - b;
    }else if(operand === "*"){
        return a * b;
    }else if(operand === "÷"){
        if(b === 0){
            return secondOperand.innerText = "Error";
        }
        return a/b;
    }
}


numbers.forEach(button =>{
    button.addEventListener('click', () => showNumber(button));
});

decimalBtn.addEventListener("click", () => {
    showDecimal();
});

allClear.addEventListener("click", () =>{
    deleteAll();
});

deleteBtn.addEventListener("click", () =>{
    deleteOne();
});

operators.forEach(button =>{
    button.addEventListener('click', () => showOperator(button));
});

equalBtn.addEventListener("click", () =>{
    showEquals();
});