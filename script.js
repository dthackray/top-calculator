let argument1 = ''
let argument2 = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.btn-number')
const operatorButtons = document.querySelectorAll('.btn-operate')
const screen = document.getElementById('screen-primary')
const secondaryScreen = document.getElementById('screen-secondary')
const clearButton = document.getElementById('btn-clear')
const undoButton = document.getElementById('btn-undo')

clearButton.addEventListener('click', () => resetScreen())
undoButton.addEventListener('click', () => undoInput())

numberButtons.forEach((button) =>
    button.addEventListener('click', () => updateScreen(button.textContent))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperator(button.textContent))
)

function undoInput() {
    screen.textContent = screen.textContent
    .toString()
    .slice(0, -1)
}

function resetScreen() {
    secondaryScreen.textContent = ''
    screen.textContent = 0
}

function clearScreen() {
    screen.textContent = ''
    shouldResetScreen = false
}

function updateScreen(number) {
    if (screen.textContent === '0' || shouldResetScreen) {
        clearScreen()
    }
    screen.textContent += number
}

function setOperator(operator) {
    if (currentOperation !== null) evaluate()
    argument1 = screen.textContent
    currentOperation = operator
    secondaryScreen.textContent = `${argument1} ${currentOperation}`
    shouldResetScreen = true
  }

  function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '/' && screen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    argument2 = screen.textContent
    screen.textContent = operate(argument1, argument2, currentOperation)
    secondaryScreen.textContent = `${argument1} ${currentOperation} ${argument2} =`
    currentOperation = null
  }

function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate (a, b, op) {
    switch (op) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}