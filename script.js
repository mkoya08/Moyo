// JavaScript Code - This is where the magic happens!

// Global variable to store the counter value
let count = 0;

// Function to increment the counter
function incrementCounter() {
  // Add 1 to the current count
  count = count + 1;

  // Update the display on the webpage
  document.getElementById("counter").textContent = count;

  // Add a fun animation effect
  const counterElement = document.getElementById("counter");
  counterElement.style.transform = "scale(1.2)";
  setTimeout(() => {
    counterElement.style.transform = "scale(1)";
  }, 200);
}

// Function to reset the counter back to zero
function resetCounter() {
  count = 0;
  document.getElementById("counter").textContent = count;
}

// Function to multiply two numbers
function multiply() {
  // Get the values from the input fields
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("multiplyResult").textContent =
      "Please enter valid numbers!";
    return;
  }

  // Calculate the result
  const result = num1 * num2;

  // Display the result with a nice format
  document.getElementById(
    "multiplyResult"
  ).textContent = `${num1} × ${num2} = ${result}`;
}

// Function to echo the user's input
function echo() {
  // Get the text from the input field
  const message = document.getElementById("echoInput").value;

  // Check if the message is empty
  if (message.trim() === "") {
    document.getElementById("echoResult").textContent =
      "Please type something!";
    return;
  }

  // Display the echoed message
  document.getElementById("echoResult").textContent = `You said: "${message}"`;

  // Add some fun effects
  const echoResult = document.getElementById("echoResult");
  echoResult.style.background = "#e8f5e8";
  echoResult.style.borderColor = "#4caf50";
  echoResult.style.color = "#2e7d32";

  // Reset the styling after a short delay
  setTimeout(() => {
    echoResult.style.background = "#e3f2fd";
    echoResult.style.borderColor = "#2196f3";
    echoResult.style.color = "#1976d2";
  }, 1000);
}

// Add some interactive features when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Calculate the initial multiplication
  multiply();

  // Add keyboard support for the echo feature
  document
    .getElementById("echoInput")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        echo();
      }
    });

  // Add keyboard support for the multiplier
  document.getElementById("num1").addEventListener("input", multiply);
  document.getElementById("num2").addEventListener("input", multiply);
});
