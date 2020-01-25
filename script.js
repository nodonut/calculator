const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

  '=': (firstOperand, secondOperand) => secondOperand
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = performCalculation[operator](firstOperand, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys1 = document.querySelector('.button-row-1');
const keys2 = document.querySelector('.button-row-2');
const keys3 = document.querySelector('.button-row-3');
const keys4 = document.querySelector('.button-row-4');
const keys5 = document.querySelector('.button-row-5');

keys1.addEventListener('click', e => {
  const { target } = e;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});

keys2.addEventListener('click', e => {
  const { target } = e;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});

keys3.addEventListener('click', e => {
  const { target } = e;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

keys4.addEventListener('click', e => {
  const { target } = e;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

keys5.addEventListener('click', e => {
  const { target } = e;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
