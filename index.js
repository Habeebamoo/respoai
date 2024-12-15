import { mle } from "./ML/machine-learning-engine.js";

alert(mle.length)

/*
Algorithms for GenO AI

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

  //Display if can't process
  if(!mleS) {
    alert("Sorry, i haven't learned how to process that ")
  }

  //Loop throught the responses
  let seenPrompt = mleS.reply;
  let random = Math.floor(Math.random() * seenPrompt.length);
  let response = seenPrompt[random].replyWord;

  //GenO giving a responses
  alert(response);
}


