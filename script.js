let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = Function('"use strict"; return (' + display.value + ')')();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
