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

console.log(allClear);
console.log(equalBtn);
console.log(decimalBtn);
console.log(deleteBtn);
console.log(operators);
console.log(numbers);
console.log(firstOperand);
console.log(secondOperand);


function showNumber(button){
    
    finalNumber = null;

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
    secondOperand.innerText = null;
    firstOperand.innerText = null;
}

function deleteOne(){

    firstNumber =  firstNumber.toString().slice(0, -1);
    
    return secondOperand.innerText = firstNumber;
}

function showOperator(button){
    
}


function operate(a, b, operand){

    if(operand === "+"){
        return a + b;
    }else if(operand === "-"){
        return a - b;
    }else if(operand === "*"){
        return a * b;
    }else if(operand === "÷"){
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