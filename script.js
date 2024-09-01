function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Erro de cálculo! Por favor, insira uma expressão válida.");
        clearDisplay();
    }
}
