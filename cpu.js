import { neurons } from "./memory/nlp.js";

document.querySelector('.trigger').addEventListener('click', () => {
  runCommand()
});

window.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    runCommand();
  }
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '/', '*'];
let numStatus = false;

const messages = JSON.parse(sessionStorage.getItem('messages')) || [];

function runCommand() {
  const promptIn = document.querySelector('.prompt').value;
  const promptTr = promptIn.toLowerCase();
  const prompt = promptTr.trim();

  numbers.forEach((num) => {
    if(prompt.includes(num)) {
      numStatus = true;
    }
  });

  if(numStatus) {
    solve(prompt);
    numStatus = false;
  } else {
    generateResponse(prompt)
  }

  document.querySelector('.prompt').value = '';
};

function generateResponse(prompt) {
  let targetNeuron;
  let targetOutput;

  neurons.forEach((neuron) => {
    let userInput = neuron.input;

    userInput.forEach((input) => {
      if(input == prompt) {
        targetNeuron = neuron;
      }
    });
    
  });

  if(!targetNeuron) {
    targetOutput = ['Sorry, i cant process that', 'Oops, i havent learnt that word yet']
  } else {
    targetOutput = targetNeuron.output;
  }

  const random = Math.floor(Math.random() * targetOutput.length);
  const response = targetOutput[random];

  addMessage(prompt, 'user-message');
  setTimeout(() => addMessage(response, 'bot-message'), 500);  
}

function solve(prompt) {
  let memory = '';

  const filter = prompt.split('');

  filter.forEach((char) => {
    numbers.forEach(num => {
      if(char == num) {
        memory += char;
      }
    })
  });

  const result = eval(memory);
  addMessage(prompt, 'user-message')
  setTimeout(() => addMessage(` The answer is ${result}`, 'bot-message'), 500);  
}

function addMessage(text, className) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${className}`;
  messageDiv.textContent = text;
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

const toggleButton = document.getElementById('themeToggle');
const body = document.querySelector('.chat-container');
const inputCont = document.querySelector('.input-container');

function enableDarkMode() {
  console.log('Dark Mode Activated');
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  inputCont.classList.add('dark-theme');
}

function enableLightMode() {
  console.log('Light Mode Activated');
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
  inputCont.classList.remove('dark-theme');
}

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  if (toggleButton.classList.contains('active')) {
      enableDarkMode();
  } else {
      enableLightMode();
  }
});

