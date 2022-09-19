//1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.getElementById("total");
//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
const addbtn = document.getElementById("add");
const subbtn = document.getElementById("subtract");
const mult2btn = document.getElementById("mult2");
const div2btn = document.getElementById("div2");
const mult5btn = document.getElementById("mult5");
const div5btn = document.getElementById("div5");

// Example:
function add() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) + 1;
  //update the value of the total variable textContent
  // use an alert to alert the user
}
function subtract() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) - 1;
}

function multiplyBy2() {
  total.textContent = Number(total.textContent) * 2;
  console.log(total.textContent);
}

function divideBy2() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) / 2;
}

function multiplyBy5() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) * 5;
}

function divideBy5() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) / 5;
}
//3. Attach Functions to Buttons
addbtn.addEventListener("click", add);
subbtn.addEventListener("click", subtract);
mult2btn.addEventListener("click", multiplyBy2);
div2btn.addEventListener("click", divideBy2);
mult5btn.addEventListener("click", multiplyBy5);
div5btn.addEventListener("click", divideBy5);
