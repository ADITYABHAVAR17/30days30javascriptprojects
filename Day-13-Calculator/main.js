document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.toggle('dark-mode-button');
    });
    this.textContent = document.body.classList.contains('dark-mode') ? '🌞 Light Mode' : '🕶 Dark Mode';
});

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        handleInput(this.value);
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        handleInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('delete');
    } else if (key === 'Escape') {
        handleInput('clear');
    }
});


function handleInput(value) {
    if (!isNaN(value) || value === '.') {
        currentInput += value;
        display.value = currentInput;
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '') return;
        operator = value;
        previousInput = currentInput;
        currentInput = '';
        display.value = previousInput + ' ' + operator;
    } else if (value === '=') {
        if (currentInput === '' || previousInput === '') return;
        const result = eval(`${previousInput} ${operator} ${currentInput}`);
        display.value = result;
        currentInput = result;
        operator = '';
        previousInput = '';
    } else if (value === 'clear') {
        currentInput = '';
        operator = '';
        previousInput = '';
        display.value = '';
    } else if (value === 'delete') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
}
