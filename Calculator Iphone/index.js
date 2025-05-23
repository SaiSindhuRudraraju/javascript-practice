const display = document.getElementById("display");

function appendToDisplay(input) {
  if (input === '±') {
    display.value = String(eval(display.value) * -1);
  } else if (input === '%') {
    display.value = String(eval(display.value) / 100);
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
