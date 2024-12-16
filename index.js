import { mle } from "./ML/machine-learning-engine.js";

/*
Algorithms for Respo AI

1. get the users input
2. save the users input
3. learn and find a study the message
4. generate a reply word
5. display the reply
*/
const chatHistory = [];

function getInput() {
  //getting the users input
  const promptIn = document.querySelector('.prompt');
  const prompt = promptIn.value;
  promptIn.value = '';

  return prompt;
};

document.querySelector('.trigger').addEventListener('click', () => {
  const prompt = getInput();

  //Saving the users message
  chatHistory.push(
    {
      prompt
    }
  );

  //accessing the recent message
  let recent = chatHistory.length - 1;
  let recentPrompt = chatHistory[recent].prompt;

  //Ready to use Machine Learning
  compareRecentPrompt(recentPrompt);
});

function compareRecentPrompt(recentPrompt) {
  //Data Norminalization
  let mleS;

  mle.forEach((text) => {
    //Language Processing
    if(recentPrompt.includes(text.keywords)) {
      mleS = text;
    };
  });

  let response = '';
  
  //Display if can't process
  if(!mleS) {
    response = "Sorry, i haven't learned how to process that";
  } else {
    let seenPrompt = mleS.reply;
    let random = Math.floor(Math.random() * seenPrompt.length);
    response = seenPrompt[random].replyWord;
  }
  
  //Respo AI giving a responses
  document.querySelector('.response').innerHTML = response;
}

  
// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(registration => {
      console.log('Service worker registered:', registration);
    })
    .catch(error => {
      console.error('Service worker registration failed:', error);
    });
}

// Load cached scripts
caches.open('my-cache').then(cache => {
  cache.keys().then(keys => {
    keys.forEach(key => {
      cache.match(key).then(response => {
        if (response) {
          console.log(`Loaded cached script: ${key.url}`);
        }
      });
    });
  });
});


