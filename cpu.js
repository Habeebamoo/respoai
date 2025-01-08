import { neurons } from "./memory/language-processor.js";

document.querySelector('.trigger').addEventListener('click', () => {
  runCommand();
});

function runCommand() {
  const promptIn = document.querySelector('.prompt').value;
  const prompt = promptIn.toLowerCase();

  generateResponse(prompt);
  windowRunCommand(prompt);
}

function windowRunCommand(event, prompt) {
  if(prompt) {
    if(event.key === 'Enter') {
      runCommand();
    }
  }
}

const myNumbers = [0,1,2,3,4,5,6,7,8,9];
let aiResponse = '';

function generateResponse(prompt) {
  let structuredData;

  myNumbers.forEach((nums) => {
    if(prompt.includes(nums)) {
      let ans = eval(prompt);
      
      structuredData = {
        input: [],
        output: [`The answer is ${ans.toLocaleString()}`]
      }
    } 
  });

  neurons.forEach((neuron) => {
    let userInputs = neuron.input;

    userInputs.forEach((userInput) => {      
      if(prompt.includes(userInput)) {
        structuredData = neuron;
      };
      
      if (!structuredData) {
        structuredData = {
          input: [],
          output: ["Sorry i'cant process that", "Sorry i haven't learnt that word yet"]
        }
      };
      
    })
  });

  localStorage.setItem('strdata', JSON.stringify(structuredData));
}

const dataStructure = JSON.parse(localStorage.getItem('strdata'));
const targetOutput = dataStructure.output;

const random = Math.floor(Math.random() * targetOutput.length);
aiResponse = targetOutput[random];

if(aiResponse) {
  document.querySelector('.response').innerHTML = aiResponse;
}

const themeCheckbox = document.getElementById('themeCheckbox');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Functions to run on toggle
function enableDarkMode() {
    console.log('Dark Mode Activated');
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
}

function enableLightMode() {
    console.log('Light Mode Activated');
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
}

// Toggle theme based on checkbox
themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        themeToggle.classList.add('active');
        enableDarkMode();
    } else {
        themeToggle.classList.remove('active');
        enableLightMode();
    }
});



