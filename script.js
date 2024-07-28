// Get the display element
const display = document.getElementById("display");

// Function to append a value to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = "Error"; // Show error if the evaluation fails
    }
}
