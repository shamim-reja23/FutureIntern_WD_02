const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  display.value += operator;
}

function appendDot() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

function toggleSign() {
  if (display.value) {
    display.value = String(-parseFloat(display.value));
  }
}

function calculatePercentage() {
  if (display.value) {
    display.value = String(parseFloat(display.value) / 100);
  }
}
