const now = new Date();
let meridian = '';

let hours = now.getHours();
let minutes = now.getMinutes();

if(now.getHours() < 12) {
  meridian = 'AM'
} else {
  meridian = 'PM';
  hours -= 12;
};

export const neurons = [
  {
    input: ['hello', 'hi', 'hey', 'how far', 'howfar', 'hafar', 'awfa', 'awfar', 'afar', 'sup', 'howdy', 'yo', "what's up", 'wassup', 'wasup', 'whatsup'],
    output: ['Hi there!', 'How may i be of help', 'Hi, What can i help you with', 'Hey there!, how may i be of help', "I'am good, you?", 'Am active', 'Good how may i be of service', 'Good, anything?']
  }, {
    input: ['how are you', 'how are you doing'],
    output: ["I'am fine and you", "Good and you?", "I am fine"]
  }, {
    input: ['good morning'],
    output: ['Good morning!, what can i help you with', 'Good morning!, how was your night', 'Welcome, hope you slept well', 'Good morning, how is the weather today']
  }, {
    input: ['good afternoon'],
    output: ['Good afternoon!, what can i help you with', 'Good afternoon!, how can i assist you', 'Good afternoon, how may i be of service', 'Good afternoon, how is the weather today']
  }, {
    input: ['good evening'],
    output: ['Good evening!, what can i help you with', 'Good evening!, how can i assist you', 'Good evening, how may i be of service', 'Good evening, how is the weather today']
  }, {
    input: ['good night'],
    output: ['Good night!, sleep tight okay', 'Good night!, see you in the morning', 'Good night, see you tomorrow', 'Good night to you too']
  }, {
    input: ['good day'],
    output: ['Thanks, my day is going fine, yours?', 'Okay thanks, any help?']
  }, {
    input: ['what are you', 'who are you', 'what is your name', 'who created you', 'who made you', 'who is your creator', 'who invented you', 'who is your inventor', "what's your name"],
    output: [
      `My name is Respo AI, i was built by <pre>Dev. Habeeb O. Amoo</pre> to respond to humans chat <p>though i am not highly sophisticated like other AI but i was built in a complex system.</p>My main process is to use Natural Language Processing (NLP) to understand your message and then use Data structuring to give you a reply just like normal humans do. NLP represents your native language while data structuring is just all what you've learnt.<pre>so does this answers your questions?</pre>`
    ]
  }, {
    input: ['what is the time', 'time', 'what is time', 'what does the time say', "what does the time say's", "what say's the time", 'what says the time', "what's the time", 'what time is it'],
    output: [`The time says ${hours}:${minutes}${meridian}`, `The time is ${hours}:${minutes}${meridian}`, `${hours}:${minutes}${meridian} says the time`]
  }, {
    input: ['fact', 'tell me a fact', 'suprise me with something interesting', 'tell me something interesting', 'suprise me'],
    output: ["Did you know that honey never spoils?", "Octopuses have three hearts!", "Bananas are berries, but strawberries aren’t."]
  }, {
    input: ['bye', 'later', 'see you soon', 'take care'],
    output: ['Goodbye! see you soon', 'See you soon!', 'Take care!']
  }, {
    input: ['thank', 'thanks'],
    output: ["It's my pleasure helping you", "You are welcome, i am always here to assist you", "Don't say it, i am built to assist you!"]
  }
];

document.querySelector('.trigger').addEventListener('click', () => {
  runCommand();
});

let prompt = '';

function runCommand() {
  const promptIn = document.querySelector('.prompt').value;
  prompt = promptIn.toLowerCase();

  generateResponse(prompt);
}

window.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    runCommand(prompt);
  }
})

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

const toggleButton = document.getElementById('themeToggle');
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

// Toggle theme based on button state
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    if (toggleButton.classList.contains('active')) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});




