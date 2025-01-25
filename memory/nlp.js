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
      `My name is Respo AI, i was built by Dev. Habeeb O. Amoo to respond to humans chat though i am not highly sophisticated like other AI but i was built in a complex system. My main process is to use Natural Language Processing (NLP) to understand your message and then use Data structuring to give you a reply just like normal humans do. NLP represents your native language while data structuring is just all what you've learnt. so does this answers your questions?`
    ]
  }, {
    input: ['what is the time', 'time', 'what is time', 'what does the time say', "what does the time say's", "what say's the time", 'what says the time', "what's the time", 'what time is it'],
    output: [`The time says ${getTime()}`, `The time is ${getTime()}`]
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

function getTime() {
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

  let time = `${hours}:${minutes} ${meridian}`;
  return time;
}


