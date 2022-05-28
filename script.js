let shouldResetScreen = false

const numberButtons = document.querySelectorAll('.btn-number')
const screen = document.getElementById('screen-main')
const clearButton = document.getElementById('btn-clear')

clearButton.addEventListener('click', () => resetScreen())

numberButtons.forEach((button) =>
    button.addEventListener('click', () => updateScreen(button.textContent))
)

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