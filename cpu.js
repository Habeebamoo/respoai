import { neurons } from "./memory/nlp.js";
let prompt = '';

function runCommand() {
  const promptIn = document.querySelector('.prompt').value;
  prompt = promptIn.toLowerCase();

  generateResponse(prompt);
}

window.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    runCommand();
  }
})

const myNumbers = [0,1,2,3,4,5,6,7,8,9];
let aiResponse = '';
let structuredData;

function generateResponse(prompt) {
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

  const targetOutput = structuredData.output;

  const random = Math.floor(Math.random() * targetOutput.length);
  aiResponse = targetOutput[random];
  console.log(aiResponse);

  updateParagraph(aiResponse);
};

function updateParagraph(newContent) {
  const paragraph = document.querySelector(".response");

  paragraph.classList.add("fade-animation");

  setTimeout(() => {
    paragraph.innerHTML = newContent;

    paragraph.classList.remove("fade-animation");
    paragraph.classList.add("fade-animation-active");
  }, 600);
}

document.querySelector('.trigger').addEventListener('click', () => {
  runCommand()
});


const toggleButton = document.getElementById('themeToggle');
const body = document.body;

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

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  if (toggleButton.classList.contains('active')) {
      enableDarkMode();
  } else {
      enableLightMode();
  }
});




