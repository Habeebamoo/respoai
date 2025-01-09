import { neurons } from "./memory/nlp.js";

let prompt = '';
let chars = [1,2,3,4,5,6,7,8,9,0,'+', '-', '/', '*'];

function runCommand() {
  const promptIn = document.querySelector('.prompt').value;
  prompt = promptIn.toLowerCase();

  chars.forEach((char) => {
    if(prompt.includes(char)) {
      solve(prompt);
    } else {
      generateResponse(prompt);
    }
  });

  document.querySelector('.prompt').value = '';
}

window.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    runCommand();
  }
})

let aiResponse = '';
let structuredData;

function solve(prompt) {
  let memory = prompt.split('');
  generateEquation(memory);
};

function generateEquation(memory) {
  let equation = '';

  memory.forEach((word) => {
    chars.forEach((char) => {
      if(word == char) {
        equation += word;
      }
    })
  });

  let result = eval(equation);

  structuredData = {
    input: [],
    output: [`The answer is ${result}`, `Your answer is ${result}`]
  }
}

function generateResponse(prompt) {
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




