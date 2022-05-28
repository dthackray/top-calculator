let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.btn-number')
const operatorButtons = document.querySelectorAll('.btn-operate')
const screen = document.getElementById('screen-main')
const clearButton = document.getElementById('btn-clear')
const undoButton = document.getElementById('btn-undo')

clearButton.addEventListener('click', () => resetScreen())
undoButton.addEventListener('click', () => undoInput())

numberButtons.forEach((button) =>
    button.addEventListener('click', () => updateScreen(button.textContent))
)

function undoInput() {
    screen.textContent = screen.textContent
    .toString()
    .slice(0, -1)
}

function resetScreen() {
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