import { useState, useEffect, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";
import getReply from "./data/ai.js";
import InputContainer from "./components/InputContainer";

export default function App() {
  const messageSection = useRef(null);
  const textArea = useRef(null);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    messageSection.current.scrollIntoView(
      {behavior: "smooth", block: "end"}
    )
  }, [messages])
  
  function sendMessage(formData) {
    const prompt = formData.get("message");
    setMessages(prev => [
      ...prev,
      {sender: 'user', content: prompt, markdown: false}
    ]);
    
    displayReply(prompt);
  }
  
  async function displayReply(prompt) {
    const reply = await getReply(prompt);
    setMessages(prev => [
      ...prev,
      {sender: 'bot', content: reply, markdown: true}
    ]);
  }
  
  const adjustHeight = () => {
    const text = textArea.current;
    text.style.height = "auto";
    text.style.height = text.scrollHeight + "px";
  }
  
  const messagesDiv = messages.map(obj => {
    return (
      <div className={`${obj.sender}-content`}>
        <span className="p-3 rounded mb-3">
          {obj.markdown ? 
            <ReactMarkdown>
              {obj.content}
            </ReactMarkdown>
          : <>
              {obj.content}
            </>
          }
        </span>
      </div>
    )
  })

  return (
    <main>
      <Header />
      <div ref={messageSection} className="container mt-1 p-4 mb-5 messages">
        {messagesDiv}
      </div>
      <InputContainer ref={textArea} handleChange={adjustHeight} handleAction={sendMessage} />
    </main>
  )
}

