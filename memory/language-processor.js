const now = new Date();
const meridian = '';

if(now.getHours() < 12) {
  meridian = 'AM';
} else {
  meridian = 'PM';
}

export const neurons = [
  {
    input: ['hello', 'hi', 'hey', 'how far', 'howfar', 'hafar', 'awfa', 'awfar', 'afar', 'hey man'],
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
  }/*, {
    input: ['what is the time', 'what is time', 'what does the time say', "what say's the time", "what's the time", 'what time is it',],
    output: [`The time is ${now.getHours()}:${now.getMinutes()}${meridian}`]
  }*/
]
