let num1 = '';
let num2 = '';
let operator = '';

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    };

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    };

    delete() {

    };

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    };

    chooseOperation(operation) {
        
    };

    compute() {

    };

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    };
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

function addFunc (num1, num2) {
    const sumAdd = num1 + num2;
    return sumAdd;
};

function subFunc (num1, num2) {
    const sumSub = num1 - num2;
    return sumSub;
};

function multiFunc (num1, num2) {
    const sumMulti = num1 * num2;
    return sumMulti;
};

function divFunc (num1, num2) {
    const sumDiv = num1 / num2;
    return sumDiv;
}

function operate (num1, operator, num2) {

}