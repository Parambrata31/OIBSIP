const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "sqrt") { // Square root operation
      display.innerText = Math.sqrt(parseFloat(display.innerText));
    } else if (item.id == "modulus") { // Modulus operation
      display.innerText = parseFloat(display.innerText) % 1 === 0 ? parseInt(display.innerText) : parseFloat(display.innerText);
    }  else if (item.id == "sin") { // Sine operation
      display.innerText = Math.sin(parseFloat(display.innerText));
    } else if (item.id == "cos") { // Cosine operation
      display.innerText = Math.cos(parseFloat(display.innerText));
    } else if (item.id == "log") { // Logarithm operation
      display.innerText = Math.log(parseFloat(display.innerText));
    } else if (item.id == "exp") { // Exponential operation
      display.innerText = Math.exp(parseFloat(display.innerText));
    } else {
      display.innerText += item.id;
    }
  };
});
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};