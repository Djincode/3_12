// "use strict";

// // Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Password
const passwordEl = document.querySelector(".password");
// Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(
  ".generator__length-counter button"
);
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");

// Functionality
let counter = 8;
let myPassword = "";
counterEl.textContent = counter;


function updateCounter() {
  counterEl.textContent = counter;
}

updateCounter();


decreaseBtn.addEventListener("click", (e)=> {
  e.preventDefault()
  if(counter>6){
    counter--;
  }
  updateCounter();
})

increaseBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(counter<20){
    counter++;
  }
  updateCounter();
})

function generatePassword() {
  let selectedSymbols = "";
  
  if (upperInput.checked) {
    selectedSymbols += upperCaseLetters;
  }  
  if (lowerInput.checked) {
    selectedSymbols += lowerCaseLetters;
  } 
  if (numbersInput.checked) {
    selectedSymbols += numbers;
  } 
  if (symbolsInput.checked) {
    selectedSymbols += special;
  } 


  for (let i = 0; i < counter; i++) {
 
    const randomIndex = Math.floor(Math.random() * selectedSymbols.length);
    myPassword += selectedSymbols[randomIndex];
  }

  passwordEl.textContent = myPassword;
}

generateBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  generatePassword();
})