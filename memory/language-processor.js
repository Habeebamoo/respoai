const today = new Date();
const now = today.toLocaleString();

export const neurons = [
  {
    input: ['hello', 'Hello', 'hi', 'Hi', 'hey', 'Hey', 'how far', 'How far', 'howfar', 'Howfar', 'hafar', 'Hafar', 'awfa', 'Awfa', 'awfar', 'Awfar', 'afar', 'Afar', 'hey man', 'Hey man'],
    output: ['Hi there!', 'How may i be of help', 'Hi, What can i help you with', 'Hey there!, how may i be of help', "I'am good, you?", 'Am active', 'Good how may i be of service', 'Good, anything?']
  }, {
    input: ['how are you', 'How are you', 'how are you doing', 'How are you doing'],
    output: ["I'am fine and you", "Good and you?", "I am fine"]
  }, {
    input: ['good morning', 'Good morning', 'Good Morning'],
    output: ['Good morning!, what can i help you with', 'Good morning!, how was your night', 'Welcome, hope you slept well', 'Good morning, how is the weather today']
  }, {
    input: ['good afternoon', 'Good afternoon', 'Good Afternoon'],
    output: ['Good afternoon!, what can i help you with', 'Good afternoon!, how can i assist you', 'Good afternoon, how may i be of service', 'Good afternoon, how is the weather today']
  }, {
    input: ['good evening', 'Good evening', 'Good Evening'],
    output: ['Good evening!, what can i help you with', 'Good evening!, how can i assist you', 'Good evening, how may i be of service', 'Good evening, how is the weather today']
  }, {
    input: ['good night', 'Good night', 'Good Night'],
    output: ['Good night!, sleep tight okay', 'Good night!, see you in the morning', 'Good night, see you tomorrow', 'Good night to you too']
  }, {
    input: ['good day', 'Good day', 'Good Day'],
    output: ['Thanks, my day is going fine, yours?', 'Okay thanks, any help?']
  }, {
    input: ['what are you', 'What are you', 'who are you', 'Who are you', 'what is your name', 'What is your name', 'who created you', 'Who created you', 'who made you', 'Who made you', 'who is your creator', 'Who is your creator', 'who invented you', 'Who invented you', 'who is your inventor', 'Who is your inventor', "what's your name", "What's your name"],
    output: [
      `My name is Respo AI, i was built by <pre>Dev. Habeeb O. Amoo</pre> to respond to humans chat <p>though i am not highly sophisticated like other AI but i was built in a complex system.</p>My main process is to use Natural Language Processing (NLP) to understand your message and then use Data structuring to give you a reply just like normal humans do. NLP represents your native language while data structuring is just all what you've learnt.<pre>so does this answers your questions?</pre>`
    ]
  }
]
